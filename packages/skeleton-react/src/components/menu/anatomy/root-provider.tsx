import type { useMenu } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { PropsWithChildren } from 'react';

export interface MenuRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof useMenu>;
}

export default function RootProvider(props: MenuRootProviderProps) {
	const { children, value: menu } = props;

	return <RootContext.Provider value={menu}>{children}</RootContext.Provider>;
}
