import { TooltipRootContext } from '../modules/root-context';
import type { PropsWithChildren } from 'react';
import type { useTooltip } from '../modules/use-tooltip';

export interface TooltipRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof useTooltip>;
}

export default function (props: TooltipRootProviderProps) {
	const { children, value: tooltip } = props;

	return <TooltipRootContext.Provider value={tooltip}>{children}</TooltipRootContext.Provider>;
}
