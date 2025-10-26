import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TabsIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function Indicator(props: TabsIndicatorProps) {
	const tabs = use(RootContext);

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
