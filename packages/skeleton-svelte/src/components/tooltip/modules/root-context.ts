import { createContext } from '../../../internal/create-context.js';
import type { useTooltip } from './provider.svelte.js';

export const TooltipRootContext = createContext<ReturnType<typeof useTooltip>>();
