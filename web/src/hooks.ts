import type { GetSession } from '@sveltejs/kit';

export const getSession: GetSession = () => {
  return {
    BASE_ENDPOINT: import.meta.env.VITE_BASE_ENDPOINT,
    API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT
  }
}
