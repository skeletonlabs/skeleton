import type { useDialog } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { PropsWithChildren } from 'react';

export interface DialogRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof useDialog>;
}

export default function RootProvider(props: DialogRootProviderProps) {
	const { children, value: dialog } = props;

	return <RootContext.Provider value={dialog}>{children}</RootContext.Provider>;
}
