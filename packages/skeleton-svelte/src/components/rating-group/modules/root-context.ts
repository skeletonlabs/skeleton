import type { useRatingGroup } from './provider.svelte.js';
import { createContext } from '../../../internal/create-context.js';

export const RootContext = createContext<ReturnType<typeof useRatingGroup>>();
