import { createContext } from '../../../internal/create-context.js';
import type { useDialog } from './provider.js';

export const RootContext = createContext<ReturnType<typeof useDialog>>();
