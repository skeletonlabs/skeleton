import { PopoverRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PopoverContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Content(props: PopoverContentProps) {
	const popover = use(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(popover.getContentProps(), rest, {
		className: classesPopover.content,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
