const PORTAL_ID = '26813018';

const LEGAL_CONSENT = {
  consent: {
    consentToProcess: true,
    text: 'I agree to allow Stretch Innovation to store and process my personal data.',
    communications: [],
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  try {
    const { formId, fields, pageUri, pageName } = req.body ?? {};

    if (!formId || !Array.isArray(fields)) {
      return res.status(400).json({ status: 'error', message: 'Invalid form payload' });
    }

    const hubspotFields = fields
      .filter((field) => field?.name && String(field.value ?? '').trim())
      .map((field) => ({ name: field.name, value: String(field.value).trim() }));

    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${formId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: hubspotFields,
          context: {
            pageUri: pageUri || '',
            pageName: pageName || '',
          },
          legalConsentOptions: LEGAL_CONSENT,
        }),
      },
    );

    const raw = await hubspotResponse.text();
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      data = { status: 'error', message: raw || 'Unexpected HubSpot response' };
    }

    if (!hubspotResponse.ok || data.status === 'error') {
      return res.status(hubspotResponse.ok ? 400 : hubspotResponse.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Server error';
    return res.status(500).json({ status: 'error', message });
  }
}
