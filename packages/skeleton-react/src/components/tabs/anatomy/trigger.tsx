import { classesTabs } from '@skeletonlabs/skeleton-common';
import { splitTriggerProps, type TriggerProps } from '@zag-js/tabs';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';
import { TabsRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface TabsTriggerProps extends TriggerProps, PropsWithElement<'button'>, HTMLAttributes<'button', 'value'> { }

export default function (props: TabsTriggerProps) {
	const tabs = use(TabsRootContext);

	const [triggerProps, componentProps] = splitTriggerProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(tabs.getTriggerProps(triggerProps), rest, {
		className: classesTabs.trigger
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
