import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { type StageTriggerProps } from '@zag-js/floating-panel';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FloatingPanelStageTriggerProps extends StageTriggerProps, PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function StageTrigger(props: FloatingPanelStageTriggerProps) {
	const floatingPanel = use(RootContext);

	const { element, children, stage, ...rest } = props;

	const attributes = mergeProps(
		floatingPanel.getStageTriggerProps({ stage }),
		{
			className: classesFloatingPanel.stageTrigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
