import { createContext } from 'react';
import type { ListboxContext as ListboxContextType } from './types.js';

export const ListboxContext = createContext<ListboxContextType>({
	id: '',
	name: '',
	select: () => {},
	deselect: () => {},
	isSelected: () => false
});
