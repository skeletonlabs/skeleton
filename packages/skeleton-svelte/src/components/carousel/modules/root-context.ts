import { createContext } from '../../../internal/create-context.js';
import type { useCarousel } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useCarousel>>();
