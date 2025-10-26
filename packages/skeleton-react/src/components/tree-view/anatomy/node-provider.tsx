import { NodeContext } from '../modules/node-context.js';
import type { NodeProps } from '@zag-js/tree-view';
import type { PropsWithChildren } from 'react';

export interface TreeViewNodeProviderProps extends PropsWithChildren {
	value: NodeProps;
}

export default function NodeProvider(props: TreeViewNodeProviderProps) {
	const { children, value: nodeProps } = props;

	return <NodeContext.Provider value={nodeProps}>{children}</NodeContext.Provider>;
}
