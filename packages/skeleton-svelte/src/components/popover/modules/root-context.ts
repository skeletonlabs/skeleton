import type { usePopover } from './provider.svelte';
import { createContext } from '@/internal/create-context';

export const PopoverRootContext = createContext<ReturnType<typeof usePopover>>();
