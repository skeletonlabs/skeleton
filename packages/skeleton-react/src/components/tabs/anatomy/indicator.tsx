import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { TabsRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TabsIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function TabsIndicator(props: TabsIndicatorProps) {
	const tabs = use(TabsRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(tabs.getIndicatorProps(), rest, {
		className: classesTabs.indicator,
	});

	return element ? element(attributes) : <div {...attributes}></div>;
}
