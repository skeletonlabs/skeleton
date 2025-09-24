import { TabsRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TabsIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function Indicator(props: TabsIndicatorProps) {
	const tabs = use(TabsRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		tabs.getIndicatorProps(),
		{
			className: classesTabs.indicator,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes} />;
}
