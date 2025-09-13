import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { PopoverRootContext } from '../modules/root-context';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverArrowProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: PopoverArrowProps) {
	const popover = useContext(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(popover.getArrowProps(), rest, {
		style: {
			'--arrow-size': 'calc(var(--spacing) * 2)',
			'--arrow-background': 'var(--color-surface-100-900)'
		} as React.CSSProperties,
		className: classesPopover.arrow
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
