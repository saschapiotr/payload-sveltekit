
type Req = { method?: string, base: string, path: string, data?: string, token?: string }
type Res = Promise<{response: Response, json: string}>;

export const send = async ({ method, base, path, data, token }: Req)
  : Res => {

  const opts: any = { method, headers: {} }

  if(data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  if(token) {
    opts.headers['Authorization'] = `Token ${token}`
  }

  const response = await fetch(encodeURI(`${base}/${path}`), opts);
  const json: any = await response.json();

  return { response, json }

}

export const get = ({base, path, token} : Req)
  : Res => send({method: 'GET', base, path, token});

export const post = ({base, path, data} : Req)
: Res => send({method: 'POST', base, path, data});