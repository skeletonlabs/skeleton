import { TabsRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TabsListProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function List(props: TabsListProps) {
	const tabs = use(TabsRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		tabs.getListProps(),
		{
			className: classesTabs.list,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
