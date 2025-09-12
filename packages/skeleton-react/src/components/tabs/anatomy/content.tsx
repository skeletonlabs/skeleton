import { classesTabs } from '@skeletonlabs/skeleton-common';
import { splitContentProps, type ContentProps } from '@zag-js/tabs';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { TabsRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TabsContentProps extends PropsWithElement, ContentProps, HTMLAttributes<'div'> {}

export default function (props: TabsContentProps) {
	const rootContext = useContext(TabsRootContext);

	const [itemProps, componentProps] = splitContentProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(rootContext.api.getContentProps(itemProps), { className: classesTabs.content }, rest);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
