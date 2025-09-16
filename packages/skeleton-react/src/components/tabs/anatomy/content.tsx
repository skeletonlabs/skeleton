import { TabsRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitContentProps } from '@zag-js/tabs';
import type { ContentProps } from '@zag-js/tabs';
import { use } from 'react';

export interface TabsContentProps extends ContentProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function TabsContent(props: TabsContentProps) {
	const tabs = use(TabsRootContext);

	const [contentProps, componentProps] = splitContentProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(tabs.getContentProps(contentProps), rest, {
		className: classesTabs.content,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
