import { RootContext } from '../modules/root-context';
import type { useTooltip } from '../modules/provider';
import { type ReactNode, use } from 'react';

export interface TooltipRootContextProps {
	children: (tooltip: ReturnType<typeof useTooltip>) => ReactNode;
}

export default function RootContext(props: TooltipRootContextProps) {
	const tooltip = use(RootContext);

	const { children } = props;

	return children(tooltip);
}
