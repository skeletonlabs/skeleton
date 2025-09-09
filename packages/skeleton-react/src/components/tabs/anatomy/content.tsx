import { classesTabs } from '@skeletonlabs/skeleton-common';
import { splitContentProps, type ContentProps } from '@zag-js/tabs';
import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps } from 'react';
import { TabsRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TabsContentProps extends PropsWithElement, ContentProps, ComponentProps<'div'> {}

export default function (props: TabsContentProps) {
	const rootContext = useContext(TabsRootContext);

	const [itemProps, componentProps] = splitContentProps(props);
	const { element, children, ...restAttributes } = componentProps;

	const attributes = mergeProps(rootContext.api.getContentProps(itemProps), { className: classesTabs.content }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
