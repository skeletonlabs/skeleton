import { createContext } from '../../../internal/create-context.js';
import type { useProgress } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useProgress>>();
