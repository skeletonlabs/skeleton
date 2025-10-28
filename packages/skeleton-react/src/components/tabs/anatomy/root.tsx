import { useTabs } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitProps } from '@zag-js/tabs';
import type { Props } from '@zag-js/tabs';

export interface TabsRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: TabsRootProps) {
	const [tabsProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const tabs = useTabs(tabsProps);

	const attributes = mergeProps(
		tabs.getRootProps(),
		{
			className: classesTabs.root,
		},
		rest,
	);

	return <RootContext.Provider value={tabs}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>;
}
