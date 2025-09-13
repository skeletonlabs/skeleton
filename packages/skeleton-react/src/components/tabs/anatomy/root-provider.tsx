import { mergeProps } from '@zag-js/react';
import { TabsRootContext } from '../modules/root-context';
import { classesTabs } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { useTabs } from '../modules/use-tabs';

export interface TabsRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'defaultValue' | 'dir'> {
	value: ReturnType<typeof useTabs>;
}

export default function (props: TabsRootProviderProps) {
	const { element, children, value: tabs, ...rest } = props;

	const attributes = mergeProps(tabs.getRootProps(), rest, {
		className: classesTabs.root
	});

	return (
		<TabsRootContext.Provider value={tabs}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</TabsRootContext.Provider>
	);
}
