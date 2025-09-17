import { TooltipRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TooltipTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Trigger(props: TooltipTriggerProps) {
	const tooltip = use(TooltipRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tooltip.getTriggerProps(), rest, {
		className: classesTooltip.trigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
