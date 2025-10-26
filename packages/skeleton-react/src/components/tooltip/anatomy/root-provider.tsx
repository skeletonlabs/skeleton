import type { useTooltip } from '../modules/provider';
import { RootContext } from '../modules/root-context.js';
import type { PropsWithChildren } from 'react';

export interface TooltipRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof useTooltip>;
}

export default function RootProvider(props: TooltipRootProviderProps) {
	const { children, value: tooltip } = props;

	return <RootContext.Provider value={tooltip}>{children}</RootContext.Provider>;
}
