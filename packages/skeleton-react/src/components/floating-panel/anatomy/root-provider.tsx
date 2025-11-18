import { RootContext } from '../modules/root-context.js';
import type { useFloatingPanel } from '../modules/provider.js';
import { type PropsWithChildren } from 'react';

export interface FloatingPanelRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof useFloatingPanel>;
}

export default function RootProvider(props: FloatingPanelRootProviderProps) {
	const { children, value: floatingPanel } = props;

	return <RootContext.Provider value={floatingPanel}>{children}</RootContext.Provider>;
}
