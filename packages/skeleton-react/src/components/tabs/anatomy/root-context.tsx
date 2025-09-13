import { useContext, type ReactNode } from 'react';
import { TabsRootContext } from '../modules/root-context';
import type { Api } from '@zag-js/tabs';

export interface TabsRootContextProps {
	children: (tabs: Api) => ReactNode;
}

export default function (props: TabsRootContextProps) {
	const tabs = useContext(TabsRootContext);

	const { children } = props;

	return children(tabs);
}
