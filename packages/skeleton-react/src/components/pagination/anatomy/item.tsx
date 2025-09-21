import { PaginationRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPagination } from '@skeletonlabs/skeleton-common';
import { splitItemProps, type ItemProps } from '@zag-js/pagination';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PaginationItemProps extends ItemProps, PropsWithElement<'a'>, HTMLAttributes<'a', 'type'> {}

export default function Item(props: PaginationItemProps) {
	const pagination = use(PaginationRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(pagination.getItemProps(itemProps), rest, {
		className: classesPagination.item,
	});

	return element ? element(attributes) : <a {...attributes}>{children}</a>;
}
