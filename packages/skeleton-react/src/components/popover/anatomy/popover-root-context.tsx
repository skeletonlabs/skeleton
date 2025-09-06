import { useContext, type ReactNode } from 'react';
import { PopoverRootContext, type PopoverRootContextType } from '../modules/popover-root-context.js';

export interface PopoverRootContextProps {
	children: (context: PopoverRootContextType) => ReactNode;
}

export default function (props: PopoverRootContextProps) {
	const rootContext = useContext(PopoverRootContext);
	return props.children(rootContext);
}
