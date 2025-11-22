import { createContext } from '../../../internal/create-context.js';
import type { useTabs } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useTabs>>();
