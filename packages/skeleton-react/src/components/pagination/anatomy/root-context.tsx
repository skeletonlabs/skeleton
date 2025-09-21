import { PaginationRootContext } from '../modules/root-context';
import type { usePagination } from '../modules/use-pagination';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface PaginationRootContextProps {
	children: (pagination: ReturnType<typeof usePagination>) => ReactNode;
}

export default function PaginationRootContextComponent(props: PaginationRootContextProps) {
	const pagination = use(PaginationRootContext);

	const { children } = props;

	return children(pagination);
}
