import { TabsRootContext } from '../modules/root-context';
import type { useTabs } from '../modules/use-tabs';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface TabsRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useTabs>;
}

export default function RootProvider(props: TabsRootProviderProps) {
	const { element, children, value: tabs, ...rest } = props;

	const attributes = mergeProps(
		tabs.getRootProps(),
		{
			className: classesTabs.root,
		},
		rest,
	);

	return (
		<TabsRootContext.Provider value={tabs}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</TabsRootContext.Provider>
	);
}
