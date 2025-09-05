import { useContext, type ReactNode } from 'react';
import { SwitchRootContext, type SwitchRootContextType } from '../modules/switch-root-context';

export interface SwitchRootContextProps {
	children: (context: SwitchRootContextType) => ReactNode;
}

export default function (props: SwitchRootContextProps) {
	const rootContext = useContext(SwitchRootContext);
	return props.children(rootContext);
}
