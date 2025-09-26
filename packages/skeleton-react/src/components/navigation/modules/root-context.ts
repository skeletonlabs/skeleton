import type { NavigationRootProps } from '../anatomy/root';
import { createContext } from '@/internal/create-context';

export const RootContext = createContext<Pick<NavigationRootProps, 'layout' | 'compact'>>();
