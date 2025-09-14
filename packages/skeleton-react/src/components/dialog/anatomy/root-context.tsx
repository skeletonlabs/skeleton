import { type ReactNode, use } from 'react';

import { DialogRootContext } from '../modules/root-context';
import type { useDialog } from '../modules/use-dialog';

export interface DialogRootContextProps {
	children: (dialog: ReturnType<typeof useDialog>) => ReactNode;
}

export default function RootContext(props: DialogRootContextProps) {
	const dialog = use(DialogRootContext);

	const { children } = props;

	return children(dialog);
}
