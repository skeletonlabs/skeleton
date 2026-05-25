import { createContext } from '../../../internal/create-context.js';
import type { usePopover } from './provider.js';

export const PopoverRootContext = createContext<ReturnType<typeof usePopover>>();
