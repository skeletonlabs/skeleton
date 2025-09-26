import { createContext } from '@/internal/create-context';

export const RootNavigationContext = createContext<
	() => {
		layout: 'bar' | 'rail' | 'sidebar';
		compact: boolean;
	}
>();
