import { createContext as createContextReact } from 'react';

export function createContext<T>(defaultValue?: T) {
	return createContextReact<T>(defaultValue as T);
}
