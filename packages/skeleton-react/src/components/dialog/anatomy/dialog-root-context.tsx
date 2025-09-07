import { useContext, type ReactNode } from 'react';
import { DialogRootContext, type DialogRootContextType } from '../modules/dialog-root-context';

export interface DialogRootContextProps {
	children: (context: DialogRootContextType) => ReactNode;
}

export default function (props: DialogRootContextProps) {
	const rootContext = useContext(DialogRootContext);
	return props.children(rootContext);
}
