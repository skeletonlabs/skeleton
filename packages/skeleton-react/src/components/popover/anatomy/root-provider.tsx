import { PopoverRootContext } from '../modules/root-context';
import type { PropsWithChildren } from 'react';
import type { usePopover } from '../modules/use-popover';

export interface PopoverRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof usePopover>;
}

export default function (props: PopoverRootProviderProps) {
	const { children, value: popover } = props;

	return <PopoverRootContext.Provider value={popover}>{children}</PopoverRootContext.Provider>;
}
