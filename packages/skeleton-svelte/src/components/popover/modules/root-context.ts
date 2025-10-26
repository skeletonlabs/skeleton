import type { usePopover } from './provider.svelte.js';
import { createContext } from '@/internal/create-context.js';

export const PopoverRootContext = createContext<ReturnType<typeof usePopover>>();
