import { RootContext } from '../modules/root-context.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type StageTriggerProps } from '@zag-js/floating-panel';
import { type ComponentPropsWithoutRef, type ElementType, useContext } from 'react';

export interface FloatingPanelStageTriggerProps
	extends ComponentPropsWithoutRef<'button'>,
		StageTriggerProps {
	element?: ElementType;
}

export default function StageTrigger(props: FloatingPanelStageTriggerProps) {
	const { element: Element = 'button', children, stage, ...rest } = props;
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel)
		throw new Error('FloatingPanel.StageTrigger must be used within FloatingPanel.Root');

	const attributes = mergeProps(
		floatingPanel.getStageTriggerProps({ stage }),
		{
			className: classesFloatingPanel.stageTrigger,
		},
		rest,
	);

	return <Element {...attributes}>{children}</Element>;
}
