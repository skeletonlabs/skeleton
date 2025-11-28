import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TabsListProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function List(props: TabsListProps) {
	const tabs = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		tabs.getListProps(),
		{
			className: classes.tabs.list,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
