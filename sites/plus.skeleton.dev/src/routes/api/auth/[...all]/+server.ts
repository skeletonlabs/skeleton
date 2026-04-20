import { auth } from '$lib/server/auth/auth';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = (event) => auth.handler(event.request);
export const POST: RequestHandler = (event) => auth.handler(event.request);
