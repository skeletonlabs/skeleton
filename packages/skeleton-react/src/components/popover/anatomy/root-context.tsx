import { useContext, type ReactNode } from 'react';
import { PopoverRootContext } from '../modules/root-context';
import type { usePopover } from '../modules/use-popover';

export interface PopoverRootContextProps {
	children: (popover: ReturnType<typeof usePopover>) => ReactNode;
}

export default function (props: PopoverRootContextProps) {
	const popover = useContext(PopoverRootContext);

	const { children } = props;

	return children(popover);
}
