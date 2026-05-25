import type { usePopover } from '../modules/provider.js';
import { PopoverRootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface PopoverRootContextProps {
	children: (popover: ReturnType<typeof usePopover>) => ReactNode;
}

export default function PopoverRootContext(props: PopoverRootContextProps) {
	const popover = use(RootContext_);

	const { children } = props;

	return children(popover);
}
