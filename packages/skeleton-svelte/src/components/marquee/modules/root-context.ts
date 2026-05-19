import { createContext } from '../../../internal/create-context.js';
import type { useMarquee } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useMarquee>>();
