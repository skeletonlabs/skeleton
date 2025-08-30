import * as tree from '@zag-js/tree-view';
import type { HTMLAttributes } from 'svelte/elements';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { PropsWithChildren } from '../../../internal/props-with-children.js';

interface TreeViewRootProps
	extends PropsWithElement,
		PropsWithChildren,
		Omit<tree.Props, 'id'>,
		Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'defaultValue' | 'dir'> {}

interface TreeViewTreeProps extends PropsWithElement, PropsWithChildren, HTMLAttributes<HTMLDivElement> {}
interface TreeViewItemProps extends PropsWithElement, PropsWithChildren, HTMLAttributes<HTMLDivElement> {
	nodeProps: tree.NodeProps;
}
interface TreeViewBranchProps extends PropsWithElement, PropsWithChildren, HTMLAttributes<HTMLDivElement> {
	nodeProps: tree.NodeProps;
}
interface TreeViewBranchControlProps extends PropsWithElement, PropsWithChildren, HTMLAttributes<HTMLDivElement> {}
interface TreeViewBranchTextProps extends PropsWithElement, PropsWithChildren, HTMLAttributes<HTMLSpanElement> {}
interface TreeViewBranchIndicatorProps extends PropsWithElement, PropsWithChildren, HTMLAttributes<HTMLSpanElement> {}
interface TreeViewBranchContentProps extends PropsWithElement, PropsWithChildren, HTMLAttributes<HTMLDivElement> {}
interface TreeViewBranchIndentGuideProps extends PropsWithElement, PropsWithChildren, HTMLAttributes<HTMLDivElement> {}
interface TreeViewLabelProps extends PropsWithElement, PropsWithChildren, HTMLAttributes<HTMLSpanElement> {
	/**
	 * The level of the label. This is used to determine the heading level for accessibility purposes.
	 *
	 * @defaultValue 3
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

interface TreeViewRootContext {
	api: tree.Api;
}
interface TreeViewNodeContext {
	nodeProps: tree.NodeProps;
}

export type {
	TreeViewRootProps,
	TreeViewTreeProps,
	TreeViewItemProps,
	TreeViewBranchProps,
	TreeViewBranchControlProps,
	TreeViewBranchTextProps,
	TreeViewBranchIndicatorProps,
	TreeViewBranchContentProps,
	TreeViewBranchIndentGuideProps,
	TreeViewLabelProps,
	TreeViewRootContext,
	TreeViewNodeContext
};
