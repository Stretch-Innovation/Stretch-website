export interface Job {
  id: string;
  title: string;
  team?: string;
  department?: string;
  location?: string;
  apply_url?: string;
  application_url?: string;
  url?: string;
  status?: string;
}

export function getJobTeam(job: Job): string | undefined {
  return job.team ?? job.department;
}

export function getJobApplyUrl(job: Job): string {
  return job.apply_url ?? job.application_url ?? job.url ?? '/contact';
}

export async function fetchJobs(): Promise<Job[]> {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL?.trim();
  const anonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!supabaseUrl || !anonKey) {
    console.warn('[jobs] PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY is not set.');
    return [];
  }

  const endpoint = `${supabaseUrl.replace(/\/$/, '')}/rest/v1/jobs?status=eq.active&select=*`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
    });

    const raw = await response.text();

    if (!response.ok) {
      console.warn(`[jobs] Supabase request failed (${response.status}).`, raw);
      return [];
    }

    let data: unknown;
    try {
      data = JSON.parse(raw);
    } catch {
      console.warn('[jobs] Supabase returned non-JSON response.', raw);
      return [];
    }

    if (!Array.isArray(data)) {
      console.warn('[jobs] Supabase response is not an array.', data);
      return [];
    }

    console.info(`[jobs] Fetched ${data.length} active job(s).`, data);
    return data as Job[];
  } catch (error) {
    console.warn('[jobs] Failed to fetch jobs from Supabase.', error);
    return [];
  }
}
