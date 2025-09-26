import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import { mergeProps, Portal } from '@zag-js/react';
import { use } from 'react';

export interface TooltipPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Positioner(props: TooltipPositionerProps) {
	const tooltip = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		tooltip.getPositionerProps(),
		{
			className: classesTooltip.positioner,
		},
		rest,
	);

	return <Portal>{element ? element(attributes) : <div {...attributes}>{children}</div>}</Portal>;
}
