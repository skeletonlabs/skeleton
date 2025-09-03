import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps } from 'react';
import { TabsRootContext } from '../modules/tabs-root-context.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';

export interface TabsListProps extends PropsWithElement, Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: TabsListProps) {
	const rootContext = useContext(TabsRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getListProps(),
		{
			className: classesTabs.list
		},
		restAttributes
	);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
