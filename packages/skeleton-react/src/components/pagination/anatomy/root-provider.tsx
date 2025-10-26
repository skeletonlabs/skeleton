import type { usePagination } from '../modules/provider';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
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
		<RootContext.Provider value={pagination}>{element ? element(attributes) : <nav {...attributes}>{children}</nav>}</RootContext.Provider>
	);
}
