import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { TabsRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TabsListProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> { }

export default function TabsList(props: TabsListProps) {
	const tabs = useContext(TabsRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(tabs.getListProps(), rest, {
		className: classesTabs.list
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
