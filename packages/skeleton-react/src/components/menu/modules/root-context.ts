import { createContext } from '../../../internal/create-context.js';
import type { useMenu } from './provider.js';

export const MenuRootContext = createContext<ReturnType<typeof useMenu>>();
