import type { PropsWithChildren } from 'react';

import { DialogRootContext } from '../modules/root-context';
import type { useDialog } from '../modules/use-dialog';

export interface DialogRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof useDialog>;
}

export default function RootProvider(props: DialogRootProviderProps) {
	const { children, value: dialog } = props;

	return <DialogRootContext.Provider value={dialog}>{children}</DialogRootContext.Provider>;
}
