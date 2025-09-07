import { useContext, type ReactNode } from 'react';
import { ComboboxItemGroupContext, type ComboboxItemGroupContextType } from '../modules/combobox-item-group-context';

export interface ComboboxItemGroupContextProps {
	children: (context: ComboboxItemGroupContextType) => ReactNode;
}

export default function (props: ComboboxItemGroupContextProps) {
	const itemGroupContext = useContext(ComboboxItemGroupContext);
	return props.children(itemGroupContext);
}
