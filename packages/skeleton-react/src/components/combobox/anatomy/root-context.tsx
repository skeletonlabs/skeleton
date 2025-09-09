import { useContext, type ReactNode } from 'react';
import { ComboboxRootContext, type ComboboxRootContextType } from '../modules/root-context';

export interface ComboboxRootContextProps {
	children: (context: ComboboxRootContextType) => ReactNode;
}

export default function (props: ComboboxRootContextProps) {
	const rootContext = useContext(ComboboxRootContext);
	return props.children(rootContext);
}
