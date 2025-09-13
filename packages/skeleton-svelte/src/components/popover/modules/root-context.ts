import { createContext } from '@/internal/create-context';
import type { usePopover } from './use-popover.svelte';

export const PopoverRootContext = createContext<ReturnType<typeof usePopover>>();
