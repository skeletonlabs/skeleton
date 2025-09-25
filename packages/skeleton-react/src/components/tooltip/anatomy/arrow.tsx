import { TooltipRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TooltipArrowProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Arrow(props: TooltipArrowProps) {
	const tooltip = use(TooltipRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		tooltip.getArrowProps(),
		{
			className: classesTooltip.arrow,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
