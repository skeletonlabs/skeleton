import type { usePopover } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { PropsWithChildren } from 'react';

export interface PopoverRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof usePopover>;
}

export default function RootProvider(props: PopoverRootProviderProps) {
	const { children, value: popover } = props;

	return <RootContext.Provider value={popover}>{children}</RootContext.Provider>;
}
