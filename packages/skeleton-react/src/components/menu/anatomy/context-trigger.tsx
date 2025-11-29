import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuContextTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button', 'id' | 'dir'> {}

export default function ContextTrigger(props: MenuContextTriggerProps) {
	const menu = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		menu.getContextTriggerProps(),
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
