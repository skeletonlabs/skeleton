import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { classesPagination } from '@skeletonlabs/skeleton-common';
import { splitItemProps, type ItemProps } from '@zag-js/pagination';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PaginationItemProps extends ItemProps, PropsWithElement<'a'>, HTMLAttributes<'a', 'type'> {}

export default function Item(props: PaginationItemProps) {
	const pagination = use(RootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		pagination.getItemProps(itemProps),
		{
			className: classesPagination.item,
		},
		rest,
	);

	return element ? element(attributes) : <a {...attributes}>{children}</a>;
}
