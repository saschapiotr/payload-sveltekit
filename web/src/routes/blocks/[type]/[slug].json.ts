import type { Request } from '@sveltejs/kit';
import * as db from '$lib/db';

// GET /{type}/{id}
export const get = async (req: Request)
  : Promise<{ 
    status: number, 
    error?: string, body?: 
    Record<string, unknown>}> => {

  const { type, slug } = req.params;
  return { status: 200, body: await db.get(`${type}/${slug}`) };
};