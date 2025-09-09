import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { PopoverRootContext } from '../modules/root-context';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverArrowProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: PopoverArrowProps) {
	const rootContext = useContext(PopoverRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(
		rootContext.api.getArrowProps(),
		{
			style: {
				'--arrow-size': 'calc(var(--spacing) * 2)',
				'--arrow-background': 'var(--color-surface-100-900)'
			},
			className: classesPopover.arrow
		},
		restAttributes
	);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
