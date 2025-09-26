import { usePagination } from '../modules/provider';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPagination } from '@skeletonlabs/skeleton-common';
import { splitProps } from '@zag-js/pagination';
import type { Props } from '@zag-js/pagination';
import { mergeProps } from '@zag-js/react';

export interface PaginationRootProps extends Omit<Props, 'id'>, PropsWithElement<'nav'>, HTMLAttributes<'nav', 'id' | 'dir'> {}

export default function PaginationRoot(props: PaginationRootProps) {
	const [paginationProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const pagination = usePagination(paginationProps);

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
