import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TooltipArrowProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Arrow(props: TooltipArrowProps) {
	const tooltip = use(RootContext);

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
