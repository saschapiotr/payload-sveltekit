const base = import.meta.env.VITE_API_ENDPOINT as string;

export const get = async (path: string)
  : Promise<Record<string, unknown>> => {

  const opts: RequestInit = { method: 'GET', headers: {} }

  return fetch(`${base}/api/${path}`, opts)
    .then((r) => r.clone())
    .then((r) => r.text())
    .then((json) => { return JSON.parse(json); });
}