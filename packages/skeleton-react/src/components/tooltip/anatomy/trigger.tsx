import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { TooltipRootContext } from '../modules/root-context.js';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element.js';

export interface TooltipTriggerProps extends PropsWithElement, HTMLAttributes<'button'> {}

export default function (props: TooltipTriggerProps) {
	const tooltip = useContext(TooltipRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tooltip.api.getTriggerProps(), { className: classesTooltip.trigger }, rest);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
