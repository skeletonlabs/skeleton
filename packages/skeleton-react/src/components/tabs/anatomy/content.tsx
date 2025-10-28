import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitContentProps } from '@zag-js/tabs';
import type { ContentProps } from '@zag-js/tabs';
import { use } from 'react';

export interface TabsContentProps extends ContentProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Content(props: TabsContentProps) {
	const tabs = use(RootContext);

	const [contentProps, componentProps] = splitContentProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		tabs.getContentProps(contentProps),
		{
			className: classesTabs.content,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
