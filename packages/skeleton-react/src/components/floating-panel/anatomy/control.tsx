import { RootContext } from '../modules/root-context.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

export interface FloatingPanelControlProps extends ComponentPropsWithoutRef<'div'> {
	element?: ElementType;
}

export default function Control(props: FloatingPanelControlProps) {
	const { element: Element = 'div', children, ...rest } = props;
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel) throw new Error('FloatingPanel.Control must be used within FloatingPanel.Root');

	const attributes = mergeProps(
		floatingPanel.getControlProps(),
		{
			className: classesFloatingPanel.control,
		},
		rest,
	);

	return <Element {...attributes}>{children}</Element>;
}
