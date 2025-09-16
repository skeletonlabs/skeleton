import { TooltipRootContext } from '../modules/root-context';
import type { useTooltip } from '../modules/use-tooltip';
import { type ReactNode, use } from 'react';

export interface TooltipRootContextProps {
	children: (tooltip: ReturnType<typeof useTooltip>) => ReactNode;
}

export default function RootContext(props: TooltipRootContextProps) {
	const tooltip = use(TooltipRootContext);

	const { children } = props;

	return children(tooltip);
}
