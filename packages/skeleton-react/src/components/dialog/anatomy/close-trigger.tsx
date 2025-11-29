import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DialogCloseTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function CloseTrigger(props: DialogCloseTriggerProps) {
	const dialog = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		dialog.getCloseTriggerProps(),
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
