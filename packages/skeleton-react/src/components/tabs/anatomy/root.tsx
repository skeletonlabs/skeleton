import { TabsRootContext } from '../modules/root-context';
import { useTabs } from '../modules/use-tabs';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTabs } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitProps } from '@zag-js/tabs';
import type { Props } from '@zag-js/tabs';

export interface TabsRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function TabsRoot(props: TabsRootProps) {
	const [tabsProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const tabs = useTabs(tabsProps);

	const attributes = mergeProps(tabs.getRootProps(), rest, {
		className: classesTabs.root,
	});

	return (
		<TabsRootContext.Provider value={tabs}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</TabsRootContext.Provider>
	);
}
