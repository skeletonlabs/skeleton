import { auth } from '$lib/features/auth/auth.server';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = (event) => auth.handler(event.request);
export const POST: RequestHandler = (event) => auth.handler(event.request);
