import type { useListbox } from '../modules/provider.js';
import { ListboxRootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface ListboxRootContextProps {
	children: (listbox: ReturnType<typeof useListbox>) => ReactNode;
}

export default function ListboxRootContext(props: ListboxRootContextProps) {
	const listbox = use(RootContext_);

	const { children } = props;

	return children(listbox);
}
