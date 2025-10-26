import type { useTabs } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface TabsRootContextProps {
	children: (tabs: ReturnType<typeof useTabs>) => ReactNode;
}

export default function RootContext(props: TabsRootContextProps) {
	const tabs = use(RootContext_);

	const { children } = props;

	return children(tabs);
}
