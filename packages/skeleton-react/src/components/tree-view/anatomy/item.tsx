import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { TreeViewNodeContext } from '../modules/node-context.js';
import { TreeViewRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewItemProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Item(props: TreeViewItemProps) {
	const treeView = use(TreeViewRootContext);
	const nodeProps = use(TreeViewNodeContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(treeView.getItemProps(nodeProps), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
