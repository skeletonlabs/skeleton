import { createContext } from '@/internal/create-context';

export const NavigationRootContext = createContext<
	() => {
		layout: 'bar' | 'rail' | 'sidebar';
		compact: boolean;
	}
>();
