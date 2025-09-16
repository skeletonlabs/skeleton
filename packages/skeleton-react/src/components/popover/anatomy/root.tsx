import { PopoverRootContext } from '../modules/root-context';
import { usePopover } from '../modules/use-popover';
import { type Props, splitProps } from '@zag-js/popover';
import { type PropsWithChildren } from 'react';

export interface PopoverRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function Root(props: PopoverRootProps) {
	const [popoverProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const popover = usePopover(popoverProps);

	return <PopoverRootContext.Provider value={popover}>{children}</PopoverRootContext.Provider>;
}
