import { createContext } from '@/internal/create-context';

export const RootNavigationContext = createContext<() => { parent: 'bar' | 'rail' | 'sidebar' }>();
