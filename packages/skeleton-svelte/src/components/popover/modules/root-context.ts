import type { usePopover } from './use-popover.svelte';
import { createContext } from '@/internal/create-context';

export const PopoverRootContext = createContext<ReturnType<typeof usePopover>>();
