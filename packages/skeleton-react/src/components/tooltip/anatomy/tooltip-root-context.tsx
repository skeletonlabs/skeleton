import { useContext, type ReactNode } from 'react';
import { type TooltipRootContextType, TooltipRootContext } from '../modules/tooltip-root-context.js';

export interface TooltipRootContextProps {
	children: (context: TooltipRootContextType) => ReactNode;
}

export default function (props: TooltipRootContextProps) {
	const rootContext = useContext(TooltipRootContext);
	return props.children(rootContext);
}
