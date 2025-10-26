import { usePopover } from '../modules/provider';
import { RootContext } from '../modules/root-context.js';
import { type Props, splitProps } from '@zag-js/popover';
import { type PropsWithChildren } from 'react';

export interface PopoverRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function Root(props: PopoverRootProps) {
	const [popoverProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const popover = usePopover(popoverProps);

	return <RootContext.Provider value={popover}>{children}</RootContext.Provider>;
}
