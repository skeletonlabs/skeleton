import { useContext, type ReactNode } from 'react';
import { ToastRootContext, type ToastRootContextType } from '../modules/root-context';

export interface ToastRootContextProps {
	children: (context: ToastRootContextType) => ReactNode;
}

export default function (props: ToastRootContextProps) {
	const rootContext = useContext(ToastRootContext);

	return props.children(rootContext);
}
