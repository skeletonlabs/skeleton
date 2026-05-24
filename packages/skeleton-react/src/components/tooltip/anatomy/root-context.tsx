import type { useTooltip } from '../modules/provider.js';
import { TooltipRootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface TooltipRootContextProps {
	children: (tooltip: ReturnType<typeof useTooltip>) => ReactNode;
}

export default function TooltipRootContext(props: TooltipRootContextProps) {
	const tooltip = use(RootContext_);

	const { children } = props;

	return children(tooltip);
}
