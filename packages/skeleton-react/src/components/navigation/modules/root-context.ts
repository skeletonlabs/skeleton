import { createContext } from '../../../internal/create-context.js';
import type { NavigationRootProps } from '../anatomy/root.js';

export const NavigationRootContext = createContext<Pick<NavigationRootProps, 'layout'>>();
