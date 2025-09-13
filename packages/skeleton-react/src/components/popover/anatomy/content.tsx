import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { PopoverRootContext } from '../modules/root-context';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface PopoverContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: PopoverContentProps) {
	const popover = useContext(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(popover.getContentProps(), rest, {
		className: classesPopover.content
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
