import { getContext, setContext } from 'svelte';

export function createContext<T>() {
	const key = Symbol();
	return {
		key: key,
		consume() {
			return getContext<T>(key);
		},
		provide(value: T) {
			return setContext(key, value);
		},
	};
}
