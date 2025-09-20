import { ComboboxRootContext } from '../modules/root-context';
import type { useCombobox } from '../modules/use-combobox';
import { type ReactNode, use } from 'react';

export interface ComboboxRootContextProps {
	children: (combobox: ReturnType<typeof useCombobox>) => ReactNode;
}

export default function RootContext(props: ComboboxRootContextProps) {
	const combobox = use(ComboboxRootContext);

	const { children } = props;

	return children(combobox);
}
