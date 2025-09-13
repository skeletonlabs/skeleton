import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { TooltipRootContext } from '../modules/root-context';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface TooltipContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: TooltipContentProps) {
	const tooltip = useContext(TooltipRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tooltip.getContentProps(), rest, {
		className: classesTooltip.content
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
