import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { PopoverRootContext } from '../modules/root-context';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverArrowTipProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: PopoverArrowTipProps) {
	const popover = useContext(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(popover.getArrowTipProps(), rest, {
		className: classesPopover.arrowTip
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
