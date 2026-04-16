import { createContext as createContextSvelte } from 'svelte';

export function createContext<T>(defaultValue?: T) {
	const [consume, provide] = createContextSvelte<T>();
	return {
		consume() {
			return consume() || (defaultValue as T);
		},
		provide,
	};
}
