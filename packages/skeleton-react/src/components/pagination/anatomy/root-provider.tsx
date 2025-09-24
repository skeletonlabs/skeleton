import { PaginationRootContext } from '../modules/root-context';
import type { usePagination } from '../modules/use-pagination';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPagination } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface PaginationRootProviderProps extends PropsWithElement<'nav'>, HTMLAttributes<'nav', 'id' | 'dir'> {
	value: ReturnType<typeof usePagination>;
}

export default function PaginationRootProvider(props: PaginationRootProviderProps) {
	const { element, children, value: pagination, ...rest } = props;

	const attributes = mergeProps(
		pagination.getRootProps(),
		{
			className: classesPagination.root,
		},
		rest,
	);

	return (
		<PaginationRootContext.Provider value={pagination}>
			{element ? element(attributes) : <nav {...attributes}>{children}</nav>}
		</PaginationRootContext.Provider>
	);
}
