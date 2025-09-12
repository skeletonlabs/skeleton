import { useContext, type PropsWithChildren } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { PopoverRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface PopoverTriggerProps extends PropsWithChildren, PropsWithElement, HTMLAttributes<'button'> {}

export default function (props: PopoverTriggerProps) {
	const rootContext = useContext(PopoverRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getTriggerProps(), { className: classesPopover.trigger }, restAttributes);

	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
