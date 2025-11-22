import { createContext } from '../../../internal/create-context.js';
import type { useRatingGroup } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useRatingGroup>>();
