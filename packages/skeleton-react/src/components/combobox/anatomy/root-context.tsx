import type { useCombobox } from '../modules/provider.js';
import { ComboboxRootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface ComboboxRootContextProps {
	children: (combobox: ReturnType<typeof useCombobox>) => ReactNode;
}

export default function ComboboxRootContext(props: ComboboxRootContextProps) {
	const combobox = use(RootContext_);

	const { children } = props;

	return children(combobox);
}
