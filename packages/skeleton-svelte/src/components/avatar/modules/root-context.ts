import { createContext } from '../../../internal/create-context.js';
import type { useAvatar } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useAvatar>>();
