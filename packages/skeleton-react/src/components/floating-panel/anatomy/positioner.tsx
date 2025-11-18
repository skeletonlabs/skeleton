import { RootContext } from '../modules/root-context.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { Portal } from '@/components/portal/portal.jsx';
import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

export interface FloatingPanelPositionerProps extends ComponentPropsWithoutRef<'div'> {
	element?: ElementType;
}

export default function Positioner(props: FloatingPanelPositionerProps) {
	const { element: Element = 'div', children, ...rest } = props;
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel)
		throw new Error('FloatingPanel.Positioner must be used within FloatingPanel.Root');

	const attributes = mergeProps(
		floatingPanel.getPositionerProps(),
		{
			className: classesFloatingPanel.positioner,
		},
		rest,
	);

	return (
		<Portal>
			<Element {...attributes}>{children}</Element>
		</Portal>
	);
}
