import { useContext, type ComponentProps, type PropsWithChildren } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { PopoverRootContext } from '../modules/popover-root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverTriggerProps extends PropsWithChildren, PropsWithElement, ComponentProps<'button'> {}

export default function (props: PopoverTriggerProps) {
	const rootContext = useContext(PopoverRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getTriggerProps(), { className: classesPopover.trigger }, restAttributes);
	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
