import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPagination } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PaginationFirstTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function FirstTrigger(props: PaginationFirstTriggerProps) {
	const pagination = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		{
         className: classesPagination.nextTrigger,
         onClick: pagination.goToFirstPage,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
