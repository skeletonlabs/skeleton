import { RootContext } from '../modules/root-context.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

export interface FloatingPanelDragTriggerProps extends ComponentPropsWithoutRef<'div'> {
	element?: ElementType;
}

export default function DragTrigger(props: FloatingPanelDragTriggerProps) {
	const { element: Element = 'div', children, ...rest } = props;
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel)
		throw new Error('FloatingPanel.DragTrigger must be used within FloatingPanel.Root');

	const attributes = mergeProps(
		floatingPanel.getDragTriggerProps(),
		{
			className: classesFloatingPanel.dragTrigger,
		},
		rest,
	);

	return <Element {...attributes}>{children}</Element>;
}
