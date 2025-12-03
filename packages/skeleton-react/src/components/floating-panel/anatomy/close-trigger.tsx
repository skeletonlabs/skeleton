import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FloatingPanelCloseTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function CloseTrigger(props: FloatingPanelCloseTriggerProps) {
	const floatingPanel = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(floatingPanel.getCloseTriggerProps(), rest);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
