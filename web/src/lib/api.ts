const base = import.meta.env.VITE_BASE_ENDPOINT as string;

const send = async (method, path, ssrFetch, data?)
  : Promise<Record<string, unknown>> => {

  const _fetch = ssrFetch ? ssrFetch : fetch;

  const opts: RequestInit = { method, headers: {} }

  if(data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  const url = `${base}/${path}`;

  const res = await _fetch(url, opts);
  const body = await res.json();

  return { res, body };
}

export const get = (path: string, ssrFetch?: any)
  : Promise<Record<string, unknown>> => send('GET', path, ssrFetch);

/*
export const post = (path: string, data: any)
  : Promise<Record<string, unknown>> => send('POST', path, data);
*/