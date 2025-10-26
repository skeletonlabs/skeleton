import type { NavigationRootProps } from '../anatomy/root.js';
import { createContext } from '@/internal/create-context.js';

export const RootContext = createContext<Pick<NavigationRootProps, 'layout'>>();
