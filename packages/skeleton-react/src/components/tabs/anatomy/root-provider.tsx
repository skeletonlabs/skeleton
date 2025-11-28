import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { useTabs } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';

export interface TabsRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useTabs>;
}

export default function RootProvider(props: TabsRootProviderProps) {
	const { element, children, value: tabs, ...rest } = props;

	const attributes = mergeProps(
		tabs.getRootProps(),
		{
			className: classes.tabs.root,
		},
		rest,
	);

	return <RootContext.Provider value={tabs}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>;
}
