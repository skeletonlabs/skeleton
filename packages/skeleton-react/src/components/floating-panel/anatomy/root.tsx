import { useFloatingPanel } from '../modules/provider.js';
import { FloatingPanelRootContext } from '../modules/root-context.js';
import { type Props, splitProps } from '@zag-js/floating-panel';
import { type PropsWithChildren } from 'react';

export interface FloatingPanelRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function Root(props: FloatingPanelRootProps) {
	const [floatingPanelProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const floatingPanel = useFloatingPanel(floatingPanelProps);

	return <FloatingPanelRootContext.Provider value={floatingPanel}>{children}</FloatingPanelRootContext.Provider>;
}
