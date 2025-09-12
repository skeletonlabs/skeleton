import { classesTabs } from '@skeletonlabs/skeleton-common';
import { splitTriggerProps, type TriggerProps } from '@zag-js/tabs';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { TabsRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TabsTriggerProps extends PropsWithElement, TriggerProps, Omit<HTMLAttributes<'button'>, 'value'> {}

export default function (props: TabsTriggerProps) {
	const rootContext = useContext(TabsRootContext);

	const [itemProps, componentProps] = splitTriggerProps(props);
	const { element, children, ...restAttributes } = componentProps;

	const attributes = mergeProps(rootContext.api.getTriggerProps(itemProps), { className: classesTabs.trigger }, restAttributes);

	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
