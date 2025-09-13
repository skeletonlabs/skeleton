import { useContext, type ReactNode } from 'react';
import { TabsRootContext } from '../modules/root-context';
import type { useTabs } from '../modules/use-tabs';

export interface TabsRootContextProps {
	children: (tabs: ReturnType<typeof useTabs>) => ReactNode;
}

export default function (props: TabsRootContextProps) {
	const tabs = useContext(TabsRootContext);

	const { children } = props;

	return children(tabs);
}
