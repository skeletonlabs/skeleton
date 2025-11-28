import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { splitEllipsisProps, type EllipsisProps } from '@zag-js/pagination';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PaginationEllipsisProps extends EllipsisProps, PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function Ellipsis(props: PaginationEllipsisProps) {
	const pagination = use(RootContext);

	const [ellipsisProps, componentProps] = splitEllipsisProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		pagination.getEllipsisProps(ellipsisProps),
		{
			className: classes.pagination.ellipsis,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
