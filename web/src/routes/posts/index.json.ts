import * as db from '$lib/db';

// GET /posts.json
export const get = async ()
  : Promise<{ 
    status: number, 
    error?: string, body?: 
    Record<string, unknown>}> => {

  return { status: 200, body: await db.get(`posts`) };
};