import { createContext } from '$lib/internal/create-context.js';
import type { ListboxContext } from './types.js';

export const [setListboxContext, getListboxContext] = createContext<ListboxContext>({
	id: '',
	name: '',
	select: () => {},
	deselect: () => {},
	isSelected: () => false
});
