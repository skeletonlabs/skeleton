import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { TabsRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TabsListProps extends PropsWithElement, Omit<HTMLAttributes<'div'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: TabsListProps) {
	const rootContext = useContext(TabsRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(rootContext.api.getListProps(), { className: classesTabs.list }, rest);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
