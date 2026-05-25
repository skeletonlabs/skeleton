import { createContext } from '../../../internal/create-context.js';
import type { usePopover } from './provider.svelte.js';

export const PopoverRootContext = createContext<ReturnType<typeof usePopover>>();
