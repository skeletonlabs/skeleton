import { useContext, type ReactNode } from 'react';
import { ComboboxItemContext, type ComboboxItemContextType } from '../modules/item-context';

export interface ComboboxItemContextProps {
	children: (context: ComboboxItemContextType) => ReactNode;
}

export default function (props: ComboboxItemContextProps) {
	const itemContext = useContext(ComboboxItemContext);
	return props.children(itemContext);
}
