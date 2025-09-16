import { PopoverRootContext } from '../modules/root-context';
import type { usePopover } from '../modules/use-popover';
import { type ReactNode, use } from 'react';

export interface PopoverRootContextProps {
	children: (popover: ReturnType<typeof usePopover>) => ReactNode;
}

export default function RootContext(props: PopoverRootContextProps) {
	const popover = use(PopoverRootContext);

	const { children } = props;

	return children(popover);
}
