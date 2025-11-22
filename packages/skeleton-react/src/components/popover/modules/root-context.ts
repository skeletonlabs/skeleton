import { createContext } from '../../../internal/create-context.js';
import type { usePopover } from './provider.js';

export const RootContext = createContext<ReturnType<typeof usePopover>>();
