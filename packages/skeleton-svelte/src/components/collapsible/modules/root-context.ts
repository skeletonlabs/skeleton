import { createContext } from '../../../internal/create-context.js';
import type { useCollapsible } from './provider.svelte.js';

export const CollapsibleRootContext = createContext<ReturnType<typeof useCollapsible>>();
