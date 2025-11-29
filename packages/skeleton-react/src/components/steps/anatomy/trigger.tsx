import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface StepsTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button', 'value' | 'disabled'> {}

export default function Trigger(props: StepsTriggerProps) {
	const steps = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		steps.getTriggerProps(itemProps),
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
