import { createContext } from '../../internal/create-context.js';
import type { NavContext } from './types.js';

export const [setNavigationContext, getNavigationContext, key] = createContext<NavContext>({
	parent: 'none',
	value: '',
	expanded: false,
});
