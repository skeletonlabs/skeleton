import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FloatingPanelControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Control(props: FloatingPanelControlProps) {
	const floatingPanel = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(floatingPanel.getControlProps(), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
