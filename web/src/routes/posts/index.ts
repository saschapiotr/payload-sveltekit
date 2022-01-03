import * as api from '$lib/api';

// GET /posts
export const get = async (): Promise<any> => {
  const endpoint = import.meta.env.VITE_API_ENDPOINT as string;
  const { response, json } = await api.get({
    base: endpoint,
    path: 'api/posts'
  });
  return {
    status: 200,
    body: json,
    headers: { ...response.headers },
  };
};