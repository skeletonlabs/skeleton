import { DialogRootContext } from '../modules/root-context';
import { useDialog } from '../modules/use-dialog';
import { type Props, splitProps } from '@zag-js/dialog';
import { type PropsWithChildren } from 'react';

export interface DialogRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function Root(props: DialogRootProps) {
	const [dialogProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const dialog = useDialog(dialogProps);

	return <DialogRootContext.Provider value={dialog}>{children}</DialogRootContext.Provider>;
}
