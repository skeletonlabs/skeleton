import { TooltipRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TooltipArrowTipProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ArrowTip(props: TooltipArrowTipProps) {
	const tooltip = use(TooltipRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tooltip.getArrowTipProps(), rest, {
		className: classesTooltip.arrowTip,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
