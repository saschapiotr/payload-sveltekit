type Req = { method?: string, base: string, path: string, data?: string, fetch: any }
type Res = Promise<{response: Response, json: string}>;

export type Endpoint = { status: number, body: string, headers: any }

const send = async ({ method, base, path, data, fetch }: Req)
  : Res => {

  const opts: any = { method, headers: {} }

  if(data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  console.log(`${base}/${path}`)

  const response = await fetch(encodeURI(`${base}/${path}`), opts);
  const json: any = await response.json();

  return { response, json }

}

export const get = ({base, path, fetch} : Req)
  : Res => send({method: 'GET', base, path, fetch});

export const post = ({base, path, data, fetch} : Req)
: Res => send({method: 'POST', base, path, data, fetch});