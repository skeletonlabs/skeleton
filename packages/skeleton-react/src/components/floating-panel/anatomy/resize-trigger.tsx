import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { splitResizeTriggerProps, type ResizeTriggerProps } from '@zag-js/floating-panel';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FloatingPanelResizeTriggerProps extends ResizeTriggerProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ResizeTrigger(props: FloatingPanelResizeTriggerProps) {
	const floatingPanel = use(RootContext);

	const [resizeTriggerProps, componentProps] = splitResizeTriggerProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		floatingPanel.getResizeTriggerProps(resizeTriggerProps as ResizeTriggerProps),
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
