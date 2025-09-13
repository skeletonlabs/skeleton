import { useContext, type ReactNode } from 'react';
import { DialogRootContext } from '../modules/root-context';
import type { useDialog } from '../modules/use-dialog';

export interface DialogRootContextProps {
	children: (dialog: ReturnType<typeof useDialog>) => ReactNode;
}

export default function (props: DialogRootContextProps) {
	const dialog = useContext(DialogRootContext);

	const { children } = props;

	return children(dialog);
}
