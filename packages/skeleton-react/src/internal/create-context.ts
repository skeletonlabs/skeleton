import { createContext as createContextReact } from 'react';

export function createContext<T>() {
	return createContextReact<T>(undefined!);
}
