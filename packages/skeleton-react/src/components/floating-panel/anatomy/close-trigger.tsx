import { RootContext } from '../modules/root-context.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

export interface FloatingPanelCloseTriggerProps extends ComponentPropsWithoutRef<'button'> {
	element?: ElementType;
}

export default function CloseTrigger(props: FloatingPanelCloseTriggerProps) {
	const { element: Element = 'button', children, ...rest } = props;
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel)
		throw new Error('FloatingPanel.CloseTrigger must be used within FloatingPanel.Root');

	const attributes = mergeProps(
		floatingPanel.getCloseTriggerProps(),
		{
			className: classesFloatingPanel.closeTrigger,
		},
		rest,
	);

	return <Element {...attributes}>{children}</Element>;
}
