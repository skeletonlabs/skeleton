import { PopoverRootContext } from '../modules/root-context';
import type { usePopover } from '../modules/use-popover';
import type { PropsWithChildren } from 'react';

export interface PopoverRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof usePopover>;
}

export default function RootProvider(props: PopoverRootProviderProps) {
	const { children, value: popover } = props;

	return <PopoverRootContext.Provider value={popover}>{children}</PopoverRootContext.Provider>;
}
