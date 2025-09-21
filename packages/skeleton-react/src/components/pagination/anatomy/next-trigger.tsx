import { PaginationRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPagination } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PaginationNextTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function NextTrigger(props: PaginationNextTriggerProps) {
	const pagination = use(PaginationRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(pagination.getNextTriggerProps(), rest, {
		className: classesPagination.nextTrigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
