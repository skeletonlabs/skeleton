import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface StepsPrevTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button', 'value' | 'disabled'> {}

export default function PrevTrigger(props: StepsPrevTriggerProps) {
	const steps = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		steps.getPrevTriggerProps(),
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
