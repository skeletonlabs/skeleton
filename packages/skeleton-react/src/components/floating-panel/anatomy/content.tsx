import { RootContext } from '../modules/root-context.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

export interface FloatingPanelContentProps extends ComponentPropsWithoutRef<'div'> {
	element?: ElementType;
}

export default function Content(props: FloatingPanelContentProps) {
	const { element: Element = 'div', children, ...rest } = props;
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel) throw new Error('FloatingPanel.Content must be used within FloatingPanel.Root');

	const attributes = mergeProps(
		floatingPanel.getContentProps(),
		{
			className: classesFloatingPanel.content,
		},
		rest,
	);

	return <Element {...attributes}>{children}</Element>;
}
