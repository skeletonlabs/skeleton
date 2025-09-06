import { useContext, type ComponentProps, type PropsWithChildren } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { PopoverRootContext } from '../modules/popover-root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverCloseTriggerProps extends PropsWithChildren, PropsWithElement, ComponentProps<'button'> {}

export default function (props: PopoverCloseTriggerProps) {
	const rootContext = useContext(PopoverRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getCloseTriggerProps(), { className: classesPopover.closeTrigger }, restAttributes);
	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
