import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { TreeViewNodeContext } from '../modules/node-context.js';
import { TreeViewRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewNodeExpandTriggerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function NodeExpandTrigger(props: TreeViewNodeExpandTriggerProps) {
	const treeView = use(TreeViewRootContext);
	const nodeProps = use(TreeViewNodeContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(treeView.getNodeExpandTriggerProps(nodeProps), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
