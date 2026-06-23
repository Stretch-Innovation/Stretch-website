export const HUBSPOT_PORTAL_ID = '26813018';

export const HUBSPOT_FORM_IDS = {
  contact: '1e0dcab1-44e4-4947-935d-234868782cc2',
  caseDownload: 'b84fa7ad-7b78-4d00-a9a7-c4bda8b6075d',
  insightDownload: '525ffee5-8542-422e-8047-a86c93dc94e6',
  bottleneckQuiz: 'eb364f5c-be6a-4814-b342-adb5e84207e0',
  newsletter: (import.meta.env.PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID as string | undefined) ?? '',
  podcastNotify: (import.meta.env.PUBLIC_HUBSPOT_PODCAST_NOTIFY_FORM_ID as string | undefined) ?? '',
} as const satisfies Record<string, string>;

export type HubSpotFormType = keyof typeof HUBSPOT_FORM_IDS;

export interface HubSpotField {
  name: string;
  value: string;
}

const LEGAL_CONSENT = {
  consent: {
    consentToProcess: true,
    text: 'I agree to allow Stretch Innovation to store and process my personal data.',
    communications: [],
  },
};

function buildPayload(fields: HubSpotField[]) {
  const filtered = fields
    .map((field) => ({ name: field.name, value: field.value.trim() }))
    .filter((field) => field.value);

  return {
    fields: filtered,
    context: {
      pageUri: window.location.href,
      pageName: document.title,
    },
    legalConsentOptions: LEGAL_CONSENT,
  };
}

async function postToHubSpot(formId: string, payload: ReturnType<typeof buildPayload>) {
  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    },
  );

  const raw = await response.text();
  let data: { status?: string; message?: string } = {};
  try {
    data = JSON.parse(raw) as { status?: string; message?: string };
  } catch {
    data = { message: raw };
  }

  if (!response.ok || data.status === 'error') {
    throw new Error(data.message || `Something went wrong. Please try again. (${response.status})`);
  }
}

async function postViaProxy(formId: string, payload: ReturnType<typeof buildPayload>) {
  const response = await fetch('/api/hubspot-submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      formId,
      fields: payload.fields,
      pageUri: payload.context.pageUri,
      pageName: payload.context.pageName,
    }),
  });

  const data = (await response.json()) as { status?: string; message?: string };

  if (!response.ok || data.status === 'error') {
    throw new Error(data.message || `Something went wrong. Please try again. (${response.status})`);
  }
}

export async function submitHubSpotForm(formId: string, fields: HubSpotField[]): Promise<void> {
  const payload = buildPayload(fields);

  if (!payload.fields.length) {
    throw new Error('Please fill in the required fields.');
  }

  try {
    await postViaProxy(formId, payload);
  } catch (proxyError) {
    // Local dev has no /api route: fall back to direct HubSpot submit.
    try {
      await postToHubSpot(formId, payload);
    } catch (directError) {
      throw directError instanceof Error ? directError : proxyError;
    }
  }
}

function getFieldValue(form: HTMLFormElement, name: string): string {
  const el = form.elements.namedItem(name);
  if (!el) return '';
  if (el instanceof RadioNodeList) {
    const selected = el.value;
    return typeof selected === 'string' ? selected.trim() : '';
  }
  if ('value' in el) return String(el.value).trim();
  return '';
}

function setSubmitting(form: HTMLFormElement, submitting: boolean) {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!button) return;

  if (submitting) {
    if (!button.dataset.originalLabel) {
      button.dataset.originalLabel = button.textContent?.trim() || 'Submit';
    }
    button.disabled = true;
    button.textContent = 'Sending…';
  } else {
    button.disabled = false;
    button.textContent = button.dataset.originalLabel || 'Submit';
  }
}

function showError(form: HTMLFormElement, message: string) {
  let error = form.querySelector<HTMLElement>('.hs-form-error');
  if (!error) {
    error = document.createElement('p');
    error.className = 'hs-form-error';
    error.setAttribute('role', 'alert');
    form.appendChild(error);
  }
  error.textContent = message;
  error.hidden = false;
}

function hideError(form: HTMLFormElement) {
  const error = form.querySelector<HTMLElement>('.hs-form-error');
  if (error) error.hidden = true;
}

function showSuccess(form: HTMLFormElement, message: string) {
  const panel = form.closest<HTMLElement>('[data-hs-form-panel]');
  const success = panel?.querySelector<HTMLElement>('.hs-form-success');

  form.classList.add('hs-form--hidden');
  hideError(form);

  if (success) {
    const messageEl = success.querySelector<HTMLElement>('[data-hs-success-message]');
    if (messageEl) {
      messageEl.textContent = message;
    } else if (!success.hasAttribute('data-hs-success-message')) {
      success.textContent = message;
    }
    success.hidden = false;
  }
}

function buildFields(form: HTMLFormElement, type: HubSpotFormType): HubSpotField[] {
  switch (type) {
    case 'contact':
      return [
        { name: 'firstname', value: getFieldValue(form, 'firstname') },
        { name: 'lastname', value: getFieldValue(form, 'lastname') },
        { name: 'email', value: getFieldValue(form, 'email') },
        { name: 'phone', value: getFieldValue(form, 'phone') },
        { name: 'message', value: getFieldValue(form, 'message') },
      ];
    case 'caseDownload':
    case 'insightDownload':
      return [
        { name: 'firstname', value: getFieldValue(form, 'firstname') },
        { name: 'lastname', value: getFieldValue(form, 'lastname') },
        { name: 'email', value: getFieldValue(form, 'email') },
        { name: 'phone', value: getFieldValue(form, 'phone') },
        { name: 'page_name', value: form.dataset.pageName || getFieldValue(form, 'page_name') },
      ];
    case 'bottleneckQuiz':
      return [
        { name: 'firstname', value: getFieldValue(form, 'firstname') },
        { name: 'lastname', value: getFieldValue(form, 'lastname') },
        { name: 'email', value: getFieldValue(form, 'email') },
        { name: 'company', value: getFieldValue(form, 'company') },
        { name: 'quiz_answers', value: getFieldValue(form, 'quiz_answers') },
      ];
    case 'newsletter':
    case 'podcastNotify':
      return [{ name: 'email', value: getFieldValue(form, 'email') }];
    default:
      return [];
  }
}

const SUCCESS_MESSAGES: Record<HubSpotFormType, string> = {
  contact: "Thanks! We'll be in touch within one business day.",
  caseDownload:
    "Thanks! Check your inbox. We've sent the full case study to your email.",
  insightDownload:
    "Thanks! Check your inbox. We've sent the full guide to your email.",
  bottleneckQuiz: "Thanks! Your personalized result is ready below.",
  newsletter: "You're in! Expect sharp thinking in your inbox.",
  podcastNotify: "You're on the list. We'll email you when a new episode drops.",
};

export function initHubSpotForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-hubspot-form]').forEach((form) => {
    if (form.dataset.hsBound === 'true') return;
    form.dataset.hsBound = 'true';

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const type = form.dataset.hubspotForm as HubSpotFormType | undefined;
      if (!type || !(type in HUBSPOT_FORM_IDS)) return;

      const formId = HUBSPOT_FORM_IDS[type];
      if (!formId) {
        showError(form, 'This form is not configured yet. Please try again later.');
        return;
      }

      hideError(form);
      setSubmitting(form, true);

      try {
        const fields = buildFields(form, type);
        await submitHubSpotForm(formId, fields);
        showSuccess(form, SUCCESS_MESSAGES[type]);
        form.dispatchEvent(new CustomEvent('hubspot:success', { bubbles: true }));
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.';
        showError(form, message);
      } finally {
        setSubmitting(form, false);
      }
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHubSpotForms);
  } else {
    initHubSpotForms();
  }
  document.addEventListener('astro:page-load', initHubSpotForms);
}
