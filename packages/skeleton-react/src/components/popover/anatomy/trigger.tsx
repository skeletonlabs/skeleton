import { useContext, type PropsWithChildren } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { PopoverRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface PopoverTriggerProps extends PropsWithChildren, PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function (props: PopoverTriggerProps) {
	const popover = useContext(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(popover.getTriggerProps(), rest, {
		className: classesPopover.trigger
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
