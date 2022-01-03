import type { Request } from '@sveltejs/kit';
import * as api from '$lib/api';

// GET /globals/slug
export const get = async (request: Request): Promise<any> => {
  const endpoint = import.meta.env.VITE_API_ENDPOINT as string;
  const { response, json } = await api.get({
    base: endpoint,
    path: `api/globals/${request.params.slug}`
  });
  return {
    status: 200,
    body: json,
    headers: { ...response.headers },
  };
};