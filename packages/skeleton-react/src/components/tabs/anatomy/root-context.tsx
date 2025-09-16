import { TabsRootContext } from '../modules/root-context';
import type { useTabs } from '../modules/use-tabs';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface TabsRootContextProps {
	children: (tabs: ReturnType<typeof useTabs>) => ReactNode;
}

export default function RootContext(props: TabsRootContextProps) {
	const tabs = use(TabsRootContext);

	const { children } = props;

	return children(tabs);
}
