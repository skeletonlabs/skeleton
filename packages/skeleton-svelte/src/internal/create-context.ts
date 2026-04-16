import { createContext as createContextSvelte } from 'svelte';

export function createContext<T>(defaultValue?: T) {
	const [consume, provide] = createContextSvelte<T>();
	return {
		consume() {
			try {
				return consume();
			} catch {
				return defaultValue as T;
			}
		},
		provide,
	};
}
