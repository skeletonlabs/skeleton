import type { useDialog } from '../modules/provider.js';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface DialogRootContextProps {
	children: (dialog: ReturnType<typeof useDialog>) => ReactNode;
}

export default function RootContext(props: DialogRootContextProps) {
	const dialog = use(RootContext_);

	const { children } = props;

	return children(dialog);
}
