import X from '../../../internal/components/x.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ToastCloseTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function CloseTrigger(props: ToastCloseTriggerProps) {
	const toast = use(RootContext);

	const { element, children = <X />, ...rest } = props;

	const attributes = mergeProps(
		toast.getCloseTriggerProps(),
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
