import { createContext } from 'react';
import type { NavContextState } from './types.js';

export const NavContext = createContext<NavContextState>({
	parent: 'none',
	value: '',
	expanded: false,
	onValueChange: () => {},
});
