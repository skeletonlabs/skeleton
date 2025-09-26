import { RootContext } from '../modules/root-context';
import type { useTabs } from '../modules/provider';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface TabsRootContextProps {
	children: (tabs: ReturnType<typeof useTabs>) => ReactNode;
}

export default function RootContext(props: TabsRootContextProps) {
	const tabs = use(RootContext);

	const { children } = props;

	return children(tabs);
}
