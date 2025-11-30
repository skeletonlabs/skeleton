import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { useTreeView } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';

export interface TreeViewRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useTreeView>;
}

export default function RootProvider(props: TreeViewRootProviderProps) {
	const { element, children, value: treeView, ...rest } = props;

	const attributes = mergeProps(treeView.getRootProps(), rest);

	return (
		<RootContext.Provider value={treeView}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
