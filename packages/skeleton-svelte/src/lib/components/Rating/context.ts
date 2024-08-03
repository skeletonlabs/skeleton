import { createContext } from '$lib/internal/create-context.js';
import type { RatingContext } from './types.js';

// @ts-expect-error - Defaults for context don't make sense, `createContext` should just throw TBH
export const [setRatingContext, getRatingContext, key] = createContext<RatingContext>();
