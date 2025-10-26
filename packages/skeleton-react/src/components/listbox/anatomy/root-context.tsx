import type { useListbox } from '../modules/provider.js';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface ListboxRootContextProps {
	children: (listbox: ReturnType<typeof useListbox>) => ReactNode;
}

export default function RootContext(props: ListboxRootContextProps) {
	const listbox = use(RootContext_);

	const { children } = props;

	return children(listbox);
}
