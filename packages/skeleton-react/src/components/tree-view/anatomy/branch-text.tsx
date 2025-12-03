import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { NodeContext } from '../modules/node-context.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewBranchTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function BranchText(props: TreeViewBranchTextProps) {
	const treeView = use(RootContext);
	const nodeProps = use(NodeContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(treeView.getBranchTextProps(nodeProps), rest);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
