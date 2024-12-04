import { createContext } from 'react';
import { NavContextState } from './types';

export const NavContext = createContext<NavContextState>({
	parent: 'none',
	value: '',
	expanded: false,
	onSelectionHandler: () => {}
});
