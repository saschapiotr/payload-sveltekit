import type { Request } from '@sveltejs/kit';
import * as db from '$lib/db';

// GET /globals/{slug}.json
export const get = async (req: Request)
  : Promise<{ 
    status: number, 
    error?: string, body?: 
    Record<string, unknown>}> => {
  
  const { slug } = req.params;
  console.log(slug)
  return { status: 200, body: await db.get(`globals/${slug}`) };
};