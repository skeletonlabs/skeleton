import type { useFloatingPanel } from '../modules/provider.js';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface FloatingPanelRootContextProps {
	children: (floatingPanel: ReturnType<typeof useFloatingPanel>) => ReactNode;
}

export default function RootContext(props: FloatingPanelRootContextProps) {
	const floatingPanel = use(RootContext_);

	const { children } = props;

	return children(floatingPanel);
}
