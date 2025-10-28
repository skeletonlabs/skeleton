import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesPagination } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PaginationLastTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function LastTrigger(props: PaginationLastTriggerProps) {
	const pagination = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		{
			className: classesPagination.nextTrigger,
			onClick: pagination.goToLastPage,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
