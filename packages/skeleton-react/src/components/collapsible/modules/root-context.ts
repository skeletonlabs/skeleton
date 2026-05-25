import { createContext } from '../../../internal/create-context.js';
import type { useCollapsible } from './provider.js';

export const CollapsibleRootContext = createContext<ReturnType<typeof useCollapsible>>();
