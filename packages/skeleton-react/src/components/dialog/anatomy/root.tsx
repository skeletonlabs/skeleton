import { useDialog } from '../modules/provider';
import { RootContext } from '../modules/root-context.js';
import { type Props, splitProps } from '@zag-js/dialog';
import { type PropsWithChildren } from 'react';

export interface DialogRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function Root(props: DialogRootProps) {
	const [dialogProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const dialog = useDialog(dialogProps);

	return <RootContext.Provider value={dialog}>{children}</RootContext.Provider>;
}
