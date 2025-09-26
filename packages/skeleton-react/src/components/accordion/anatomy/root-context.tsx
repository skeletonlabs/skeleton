import type { useAccordion } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface RootContextProps {
	children: (accordion: ReturnType<typeof useAccordion>) => ReactNode;
}

export default function RootContext(props: RootContextProps) {
	const accordion = use(RootContext_);

	const { children } = props;

	return children(accordion);
}
