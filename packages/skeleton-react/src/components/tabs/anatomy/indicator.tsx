import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps } from 'react';
import { TabsRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TabsIndicatorProps extends PropsWithElement, Omit<ComponentProps<'div'>, 'children'> {}

export default function (props: TabsIndicatorProps) {
	const rootContext = useContext(TabsRootContext);

	const { element, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getIndicatorProps(), { className: classesTabs.indicator }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}></div>;
}
