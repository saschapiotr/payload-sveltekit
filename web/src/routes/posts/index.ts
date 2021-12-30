import * as api from '$lib/api'

export const get = async (): Promise<api.Endpoint> => {
  const { response, json } = await api.get({
    base: import.meta.env.VITE_API_ENDPOINT as string,
    path: 'api/posts'
  });
  return {
    status: 200,
    body: json,
    headers: { ...response.headers }
  }
}