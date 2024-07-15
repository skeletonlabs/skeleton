import { createContext } from '$lib/internal/create-context.js';
import type { NavContext } from './types.js';

export const [setNavigationContext, getNavigationContext, key] = createContext<NavContext>({
	parent: 'none',
	selected: '',
	expanded: false,
	onSelectionHandler: () => {}
});
