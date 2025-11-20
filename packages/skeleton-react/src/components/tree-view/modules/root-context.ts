import { createContext } from '../../../internal/create-context.js';
import type { useTreeView } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useTreeView>>();
