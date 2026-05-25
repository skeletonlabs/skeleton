import type { useFloatingPanel } from '../modules/provider.js';
import { FloatingPanelRootContext } from '../modules/root-context.js';
import { type PropsWithChildren } from 'react';

export interface FloatingPanelRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof useFloatingPanel>;
}

export default function RootProvider(props: FloatingPanelRootProviderProps) {
	const { children, value: floatingPanel } = props;

	return <FloatingPanelRootContext.Provider value={floatingPanel}>{children}</FloatingPanelRootContext.Provider>;
}
