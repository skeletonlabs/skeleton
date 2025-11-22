import { createContext } from '../../../internal/create-context.js';
import type { useCollapsible } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useCollapsible>>();
