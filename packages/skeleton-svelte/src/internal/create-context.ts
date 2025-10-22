import { getContext, setContext } from 'svelte';

export function createContext<T>(defaultValue?: T) {
	const key = Symbol();
	return {
		key,
		consume() {
			return getContext<T>(key) || (defaultValue as T);
		},
		provide(value: T) {
			return setContext(key, value);
		},
	};
}
