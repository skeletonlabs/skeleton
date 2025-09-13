import { useContext, type ReactNode } from 'react';
import { TooltipRootContext } from '../modules/root-context';
import type { useTooltip } from '../modules/use-tooltip';

export interface TooltipRootContextProps {
	children: (tooltip: ReturnType<typeof useTooltip>) => ReactNode;
}

export default function (props: TooltipRootContextProps) {
	const tooltip = useContext(TooltipRootContext);

	const { children } = props;

	return children(tooltip);
}
