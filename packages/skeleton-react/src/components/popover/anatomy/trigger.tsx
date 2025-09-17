import { PopoverRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type PropsWithChildren, use } from 'react';

export interface PopoverTriggerProps extends PropsWithChildren, PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Trigger(props: PopoverTriggerProps) {
	const popover = use(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(popover.getTriggerProps(), rest, {
		className: classesPopover.trigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
