import { TooltipRootContext } from '../modules/root-context';
import type { useTooltip } from '../modules/use-tooltip';
import type { PropsWithChildren } from 'react';

export interface TooltipRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof useTooltip>;
}

export default function RootProvider(props: TooltipRootProviderProps) {
	const { children, value: tooltip } = props;

	return <TooltipRootContext.Provider value={tooltip}>{children}</TooltipRootContext.Provider>;
}
