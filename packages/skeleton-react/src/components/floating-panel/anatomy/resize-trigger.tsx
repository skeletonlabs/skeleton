import { RootContext } from '../modules/root-context.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type ResizeTriggerProps, splitResizeTriggerProps } from '@zag-js/floating-panel';
import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

export interface FloatingPanelResizeTriggerProps
	extends ComponentPropsWithoutRef<'div'>,
		ResizeTriggerProps {
	element?: ElementType;
}

export default function ResizeTrigger(props: FloatingPanelResizeTriggerProps) {
	const [resizeTriggerProps, componentProps] = splitResizeTriggerProps(props);
	const { element: Element = 'div', children, ...rest } = componentProps;
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel)
		throw new Error('FloatingPanel.ResizeTrigger must be used within FloatingPanel.Root');

	const attributes = mergeProps(
		floatingPanel.getResizeTriggerProps(resizeTriggerProps),
		{
			className: classesFloatingPanel.resizeTrigger,
		},
		rest,
	);

	return <Element {...attributes}>{children}</Element>;
}
