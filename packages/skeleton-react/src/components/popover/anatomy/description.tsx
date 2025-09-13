import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { PopoverRootContext } from '../modules/root-context';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverDescriptionProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: PopoverDescriptionProps) {
	const popover = useContext(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(popover.getDescriptionProps(), rest, {
		className: classesPopover.description
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
