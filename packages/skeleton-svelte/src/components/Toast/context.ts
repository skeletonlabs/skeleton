import { createContext } from '../../internal/create-context.js';
import type { ToastContext } from './types.js';

export const [setToastContext, getToastContext] = createContext<ToastContext>(null!);
