import { createContext } from '../../../internal/create-context.js';
import type { useRatingGroup } from './provider.svelte.js';

export const RatingGroupRootContext = createContext<ReturnType<typeof useRatingGroup>>();
