import { useContext, type ReactNode } from 'react';
import { ComboboxRootContext } from '../modules/root-context';
import type { useCombobox } from '../modules/use-combobox';

export interface ComboboxRootContextProps {
	children: (combobox: ReturnType<typeof useCombobox>) => ReactNode;
}

export default function (props: ComboboxRootContextProps) {
	const combobox = useContext(ComboboxRootContext);

	const { children } = props;

	return children(combobox);
}
