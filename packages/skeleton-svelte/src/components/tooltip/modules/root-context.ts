import type { useTooltip } from './use-tooltip.svelte';
import { createContext } from '@/internal/create-context';

export const TooltipRootContext = createContext<ReturnType<typeof useTooltip>>();
