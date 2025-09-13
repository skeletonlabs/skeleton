import { createContext } from '@/internal/create-context';
import type { useTooltip } from './use-tooltip.svelte';

export const TooltipRootContext = createContext<ReturnType<typeof useTooltip>>();
