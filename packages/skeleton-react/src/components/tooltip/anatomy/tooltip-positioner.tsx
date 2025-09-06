import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { TooltipRootContext } from '../modules/tooltip-root-context';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TooltipPositionerProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: TooltipPositionerProps) {
	const rootContext = useContext(TooltipRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getPositionerProps(),
		{
			className: classesTooltip.positioner
		},
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
