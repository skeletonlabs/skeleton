import { RootContext } from '../modules/root-context.js';
import { type ReactNode, useContext } from 'react';
import type { useFloatingPanel } from '../modules/provider.js';

export interface FloatingPanelRootContextProps {
	children: (floatingPanel: ReturnType<typeof useFloatingPanel>) => ReactNode;
}

export default function RootContextComponent(props: FloatingPanelRootContextProps) {
	const floatingPanel = useContext(RootContext);
	if (!floatingPanel) throw new Error('FloatingPanel.Context must be used within FloatingPanel.Root');
	return <>{props.children(floatingPanel)}</>;
}
