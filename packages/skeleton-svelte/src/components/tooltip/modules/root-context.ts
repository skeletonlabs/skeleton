import { createContext } from '../../../internal/create-context.js';
import type { useTooltip } from './provider.svelte.js';

export const RootContext = createContext<ReturnType<typeof useTooltip>>();
