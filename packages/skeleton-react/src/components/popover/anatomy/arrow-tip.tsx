import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { PopoverRootContext } from '../modules/root-context';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverArrowTipProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: PopoverArrowTipProps) {
	const rootContext = useContext(PopoverRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getArrowTipProps(), { className: classesPopover.arrowTip }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
