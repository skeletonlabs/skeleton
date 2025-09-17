import { PopoverRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PopoverTitleProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Title(props: PopoverTitleProps) {
	const popover = use(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(popover.getTitleProps(), rest, {
		className: classesPopover.title,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
