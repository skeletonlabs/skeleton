import { type PropsWithChildren } from 'react';
import { splitProps, type Props } from '@zag-js/popover';
import { PopoverRootContext } from '../modules/root-context';
import { usePopover } from '../modules/use-popover';

export interface PopoverRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function (props: PopoverRootProps) {
	const [popoverProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const popover = usePopover(popoverProps);

	return <PopoverRootContext.Provider value={popover}>{children}</PopoverRootContext.Provider>;
}
