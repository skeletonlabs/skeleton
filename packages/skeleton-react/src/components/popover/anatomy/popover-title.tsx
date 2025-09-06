import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { PopoverRootContext } from '../modules/popover-root-context';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverTitleProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: PopoverTitleProps) {
	const rootContext = useContext(PopoverRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getTitleProps(),
		{
			className: classesPopover.title
		},
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
