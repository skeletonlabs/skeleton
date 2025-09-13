import { classesTabs } from '@skeletonlabs/skeleton-common';
import { splitContentProps, type ContentProps } from '@zag-js/tabs';
import { mergeProps } from '@zag-js/react';
import { useContext } from 'react';
import { TabsRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface TabsContentProps extends ContentProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: TabsContentProps) {
	const tabs = useContext(TabsRootContext);

	const [contentProps, componentProps] = splitContentProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(tabs.getContentProps(contentProps), rest, {
		className: classesTabs.content
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
