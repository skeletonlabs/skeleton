import { PaginationRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPagination } from '@skeletonlabs/skeleton-common';
import { splitEllipsisProps, type EllipsisProps } from '@zag-js/pagination';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PaginationEllipsisProps extends EllipsisProps, PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function Ellipsis(props: PaginationEllipsisProps) {
	const pagination = use(PaginationRootContext);

	const [ellipsisProps, componentProps] = splitEllipsisProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		pagination.getEllipsisProps(ellipsisProps),
		{
			className: classesPagination.ellipsis,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
