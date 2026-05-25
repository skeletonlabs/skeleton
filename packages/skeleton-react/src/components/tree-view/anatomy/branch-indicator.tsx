// oxlint-disable-next-line no-unused-vars
import ChevronRight from '../../../internal/components/chevron-right.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { TreeViewNodeContext } from '../modules/node-context.js';
import { TreeViewRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface TreeViewBranchIndicatorProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function BranchIndicator(props: TreeViewBranchIndicatorProps) {
	const treeView = use(TreeViewRootContext);
	const nodeProps = use(TreeViewNodeContext);

	const { element, children = <ChevronRight className="size-4" />, ...rest } = props;

	const attributes = mergeProps(treeView.getBranchIndicatorProps(nodeProps), rest);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
