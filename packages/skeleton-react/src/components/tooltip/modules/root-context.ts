import type { useTooltip } from './use-tooltip';
import { createContext } from '@/internal/create-context';

export const TooltipRootContext = createContext<ReturnType<typeof useTooltip>>();
