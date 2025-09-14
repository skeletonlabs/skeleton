import { type ReactNode, use } from 'react';

import { TooltipRootContext } from '../modules/root-context';
import type { useTooltip } from '../modules/use-tooltip';

export interface TooltipRootContextProps {
	children: (tooltip: ReturnType<typeof useTooltip>) => ReactNode;
}

export default function RootContext(props: TooltipRootContextProps) {
	const tooltip = use(TooltipRootContext);

	const { children } = props;

	return children(tooltip);
}
