import { useContext, type ReactNode } from 'react';
import { type TabsRootContextType, TabsRootContext } from '../modules/tabs-root-context';

export interface TabsRootContextProps {
	children: (context: TabsRootContextType) => ReactNode;
}

export default function (props: TabsRootContextProps) {
	const rootContext = useContext(TabsRootContext);
	return props.children(rootContext);
}
