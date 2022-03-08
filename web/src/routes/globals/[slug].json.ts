import type { Request } from '@sveltejs/kit';
import * as db from '$lib/db';

// GET /globals/{slug}.json
export const get = async (req: Request)
  : Promise<{ 
    status: number, 
    error?: string, body?: 
    Record<string, unknown>}> => {
  
  const { slug } = req.params;
  return { status: 200, body: await db.get(`globals/${slug}`) };
};