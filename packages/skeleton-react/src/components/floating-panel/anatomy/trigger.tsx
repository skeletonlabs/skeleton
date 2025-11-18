import { RootContext } from '../modules/root-context.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

export interface FloatingPanelTriggerProps extends ComponentPropsWithoutRef<'button'> {
	element?: ElementType;
}

export default function Trigger(props: FloatingPanelTriggerProps) {
	const { element: Element = 'button', children, ...rest } = props;
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel) throw new Error('FloatingPanel.Trigger must be used within FloatingPanel.Root');

	const attributes = mergeProps(
		floatingPanel.getTriggerProps(),
		{
			className: classesFloatingPanel.trigger,
		},
		rest,
	);

	return <Element {...attributes}>{children}</Element>;
}
