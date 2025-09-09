import { useContext, type ReactNode } from 'react';
import { ToastGroupContext, type ToastGroupContextType } from '../modules/group-context';

export interface ToastGroupContextProps {
	children: (context: ToastGroupContextType) => ReactNode;
}

export default function (props: ToastGroupContextProps) {
	const groupContext = useContext(ToastGroupContext);

	return props.children(groupContext);
}
