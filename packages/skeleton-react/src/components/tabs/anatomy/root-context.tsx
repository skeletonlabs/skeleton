import { type ReactNode, use } from 'react';

import { TabsRootContext } from '../modules/root-context';
import type { useTabs } from '../modules/use-tabs';

export interface TabsRootContextProps {
	children: (tabs: ReturnType<typeof useTabs>) => ReactNode;
}

export default function RootContext(props: TabsRootContextProps) {
	const tabs = use(TabsRootContext);

	const { children } = props;

	return children(tabs);
}
