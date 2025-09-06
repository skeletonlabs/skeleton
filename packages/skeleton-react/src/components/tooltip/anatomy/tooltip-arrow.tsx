import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { TooltipRootContext } from '../modules/tooltip-root-context';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TooltipArrowProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: TooltipArrowProps) {
	const rootContext = useContext(TooltipRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getArrowProps(),
		{
			style: {
				'--arrow-size': 'calc(var(--spacing) * 2)',
				'--arrow-background': 'var(--color-surface-100-900)'
			},
			className: classesTooltip.arrow
		},
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
