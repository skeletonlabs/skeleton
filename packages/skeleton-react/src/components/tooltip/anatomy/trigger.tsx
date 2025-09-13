import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import { TooltipRootContext } from '../modules/root-context';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface TooltipTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function (props: TooltipTriggerProps) {
	const tooltip = useContext(TooltipRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tooltip.getTriggerProps(), rest, {
		className: classesTooltip.trigger
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
