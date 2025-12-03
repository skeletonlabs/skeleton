import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { splitTriggerProps } from '@zag-js/tabs';
import type { TriggerProps } from '@zag-js/tabs';
import { use } from 'react';

export interface TabsTriggerProps extends TriggerProps, PropsWithElement<'button'>, HTMLAttributes<'button', 'value'> {}

export default function Trigger(props: TabsTriggerProps) {
	const tabs = use(RootContext);

	const [triggerProps, componentProps] = splitTriggerProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(tabs.getTriggerProps(triggerProps), rest);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
