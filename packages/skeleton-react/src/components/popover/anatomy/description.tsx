import { PopoverRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PopoverDescriptionProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Description(props: PopoverDescriptionProps) {
	const popover = use(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(popover.getDescriptionProps(), rest, {
		className: classesPopover.description,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
