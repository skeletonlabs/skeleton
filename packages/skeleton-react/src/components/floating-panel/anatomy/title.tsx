import { RootContext } from '../modules/root-context.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

export interface FloatingPanelTitleProps extends ComponentPropsWithoutRef<'div'> {
	element?: ElementType;
}

export default function Title(props: FloatingPanelTitleProps) {
	const { element: Element = 'div', children, ...rest } = props;
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel) throw new Error('FloatingPanel.Title must be used within FloatingPanel.Root');

	const attributes = mergeProps(
		floatingPanel.getTitleProps(),
		{
			className: classesFloatingPanel.title,
		},
		rest,
	);

	return <Element {...attributes}>{children}</Element>;
}
