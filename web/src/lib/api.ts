type Req = { method?: string, path: string, data?: string, kitFetch?: any }
type Res = Promise<{response: Response, json: any}>;

import { get as getStore } from 'svelte/store';
import { session } from "$app/stores";

export type Endpoint = { status: number, body: string, headers: any }

const send = async ({ method, path, data, kitFetch }: Req)
  : Res => {

  const { API_ENDPOINT } = getStore(session);

  console.log(API_ENDPOINT);

  const opts: any = { method, headers: {} }

  if(data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  const uri = encodeURI(`${API_ENDPOINT}/${path}`);
  const response = kitFetch ? await kitFetch(uri, opts) : await fetch(uri,opts);
  
  const json: any = await response.json();

  return { response, json }
}

export const get = ({path, kitFetch} : Req)
  : Res => send({method: 'GET', path, kitFetch});

export const post = ({ path, data, kitFetch} : Req)
: Res => send({method: 'POST', path, data, kitFetch});