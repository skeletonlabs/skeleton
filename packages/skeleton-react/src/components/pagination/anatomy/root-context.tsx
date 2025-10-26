import type { usePagination } from '../modules/provider.js';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface PaginationRootContextProps {
	children: (pagination: ReturnType<typeof usePagination>) => ReactNode;
}

export default function RootContext(props: PaginationRootContextProps) {
	const pagination = use(RootContext_);

	const { children } = props;

	return children(pagination);
}
