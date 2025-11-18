import { RootContext } from '../modules/root-context.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

export interface FloatingPanelHeaderProps extends ComponentPropsWithoutRef<'div'> {
	element?: ElementType;
}

export default function Header(props: FloatingPanelHeaderProps) {
	const { element: Element = 'div', children, ...rest } = props;
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel) throw new Error('FloatingPanel.Header must be used within FloatingPanel.Root');

	const attributes = mergeProps(
		floatingPanel.getHeaderProps(),
		{
			className: classesFloatingPanel.header,
		},
		rest,
	);

	return <Element {...attributes}>{children}</Element>;
}
