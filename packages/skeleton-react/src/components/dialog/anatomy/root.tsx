import { useId, type PropsWithChildren } from 'react';
import { splitProps, type Props } from '@zag-js/dialog';
import { DialogRootContext } from '../modules/root-context';
import { useDialog } from '../modules/use-dialog';

export interface DialogRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function (props: DialogRootProps) {
	const [dialogProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const dialog = useDialog({
		id: useId(),
		...dialogProps
	});

	return <DialogRootContext.Provider value={dialog}>{children}</DialogRootContext.Provider>;
}
