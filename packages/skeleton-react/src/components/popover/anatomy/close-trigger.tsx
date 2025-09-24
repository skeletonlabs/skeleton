import { PopoverRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface PopoverCloseTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function CloseTrigger(props: PopoverCloseTriggerProps) {
	const popover = use(PopoverRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		popover.getCloseTriggerProps(),
		{
			className: classesPopover.closeTrigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
