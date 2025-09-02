import { classesTabs } from '@skeletonlabs/skeleton-common';
import { splitTriggerProps, type TriggerProps } from '@zag-js/tabs';
import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps } from 'react';
import { TabsRootContext } from '../modules/tabs-root-context.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';

export interface TabsTriggerProps extends PropsWithElement, TriggerProps, Omit<ComponentProps<'button'>, 'value'> {}

export default function (props: TabsTriggerProps) {
	const rootContext = useContext(TabsRootContext);
	const [itemProps, componentProps] = splitTriggerProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const attributes = mergeProps(
		rootContext.api.getTriggerProps(itemProps),
		{
			className: classesTabs.trigger
		},
		restAttributes
	);
	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
