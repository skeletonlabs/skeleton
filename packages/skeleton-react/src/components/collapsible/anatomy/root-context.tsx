import type { useCollapsible } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface CollapsibleRootContextProps {
	children: (collapsible: ReturnType<typeof useCollapsible>) => ReactNode;
}

export default function RootContext(props: CollapsibleRootContextProps) {
	const collapsible = use(RootContext_);

	const { children } = props;

	return children(collapsible);
}
