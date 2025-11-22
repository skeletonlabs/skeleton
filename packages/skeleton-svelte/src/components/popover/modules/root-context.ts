import { createContext } from '../../../internal/create-context.js';
import type { usePopover } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof usePopover>>();
