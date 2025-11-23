import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FloatingPanelTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Trigger(props: FloatingPanelTriggerProps) {
	const floatingPanel = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		floatingPanel.getTriggerProps(),
		{
			className: classesFloatingPanel.trigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
