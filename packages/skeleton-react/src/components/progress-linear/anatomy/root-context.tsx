import { useContext, type ReactNode } from 'react';
import { ProgressLinearRootContext, type ProgressLinearRootContextType } from '../modules/root-context';

export interface ProgressLinearRootContextProps {
	children: (context: ProgressLinearRootContextType) => ReactNode;
}

export default function (props: ProgressLinearRootContextProps) {
	const rootContext = useContext(ProgressLinearRootContext);

	return props.children(rootContext);
}
