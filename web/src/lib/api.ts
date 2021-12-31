type Req = { method?: string, base: string, path: string, data?: string, kitFetch?: any }
type Res = Promise<{response: Response, json: any}>;

export type Endpoint = { status: number, body: string, headers: any }

const send = async ({ method, base, path, data, kitFetch }: Req)
  : Res => {

  const opts: any = { method, headers: {} }

  if(data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  const uri = encodeURI(`${base}/${path}`);
  const response = kitFetch ? await kitFetch(uri, opts) : await fetch(uri,opts);
  
  const json: any = await response.json();

  return { response, json }
}

export const get = ({base, path, kitFetch} : Req)
  : Res => send({method: 'GET', base, path, kitFetch});

export const post = ({base, path, data, kitFetch} : Req)
: Res => send({method: 'POST', base, path, data, kitFetch});