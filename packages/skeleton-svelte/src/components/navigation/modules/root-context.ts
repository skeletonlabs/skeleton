import type { NavigationRootProps } from '../anatomy/root.svelte';
import { createContext } from '@/internal/create-context';

export const NavigationRootContext = createContext<() => Pick<NavigationRootProps, 'layout' | 'compact'>>();
