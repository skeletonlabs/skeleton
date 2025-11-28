import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TabsIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function Indicator(props: TabsIndicatorProps) {
	const tabs = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		tabs.getIndicatorProps(),
		{
			className: classes.tabs.indicator,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes} />;
}
