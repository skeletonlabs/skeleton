import { useContext } from 'react';
import { mergeProps, Portal } from '@zag-js/react';
import { TooltipRootContext } from '../modules/root-context';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface TooltipPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: TooltipPositionerProps) {
	const tooltip = useContext(TooltipRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tooltip.getPositionerProps(), rest, {
		className: classesTooltip.positioner
	});

	return <Portal>{element ? element(attributes) : <div {...attributes}>{children}</div>}</Portal>;
}
