import type { PropTypes } from '@zag-js/svelte';
import type { NodeProps } from '@zag-js/tree-view';
import * as tree from '@zag-js/tree-view';
import type { Snippet } from 'svelte';

// Context ---

export interface TreeViewContext {
	api: ReturnType<typeof tree.connect<PropTypes, CollectionNode>> | undefined;
	registerNode: (node: CollectionNode) => number[];
	unregisterNode: (nodeId: string) => void;
	updateNode: (node: CollectionNode) => void;
}

export interface NodeContext {
	node: CollectionNode;
	registerChild: (child: CollectionNode) => number[];
	unregisterChild: (childId: string) => void;
	updateChild: (child: CollectionNode) => void;
}

// Components ---

export interface TreeViewProps extends Omit<tree.Props, 'id' | 'collection'> {
	// Base ---
	/** Set base styles. */
	base?: string;
	/** Set background styles. */
	background?: string;
	/** Set vertical spacing styles. */
	spaceY?: string;
	/** Set border styles. */
	border?: string;
	/** Set padding styles. */
	padding?: string;
	/** Set shadow styles. */
	shadow?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Label ---
	/** Set the label to display. */
	label?: string;
	/** Set the label element type. */
	labelElement?: string;
	/** Set label snippet's styles. */
	labelBase?: string;
	/** Set label typography styles. */
	labelTypography?: string;
	/** Provide arbitrary CSS classes to the label. */
	labelClasses?: string;

	// Snippets ---
	/** Where the nodes of the tree are rendered. */
	children?: Snippet;

	// Zag ---
	/** Binds the Zag API for external use. */
	onApiReady?: (api: TreeViewApi) => void;
}

export interface TreeBranchProps {
	// Content ---
	/** Set content styles. */
	contentBase?: string;
	/** Set content background styles. */
	contentBackground?: string;
	/** Set content vertical spacing styles. */
	contentSpaceY?: string;
	/** Set content border styles. */
	contentBorder?: string;
	/** Set content padding styles. */
	contentPadding?: string;
	/** Set content shadow styles. */
	contentShadow?: string;
	/** Provide arbitrary CSS classes to the contents. */
	contentClasses?: string;

	// Control ---
	/** Set control styles. */
	base?: string;
	/** Set control background styles. */
	background?: string;
	/** Set control styles when selected. */
	selected?: string;
	/** Set control vertical spacing styles. */
	spaceY?: string;
	/** Set control hover styles. */
	hover?: string;
	/** Set control border styles. */
	border?: string;
	/** Set control padding styles. */
	padding?: string;
	/** Set control shadow styles. */
	shadow?: string;
	/** Provide arbitrary CSS classes to the controls. */
	classes?: string;

	// Indent ---
	/** Set indentation amount. */
	indentAmount?: string;

	// Indicator ---
	/** Set indicator base styles. */
	indicatorBase?: string;
	/** Set indicator transformations when open. */
	indicatorRotationClass?: string;
	/** Set indicator transitions. */
	indicatorTransition?: string;

	// Logic ---
	/** The unique identifier for the branch. */
	id: string;
	/** The "name" of the branch. */
	value: string;
	/** Whether the branch is disabled. */
	disabled?: boolean;

	// Snippets ---
	/** The lead icon for expandable branches. */
	icon?: Snippet;
	/** The icon to indicate if the node children are expanded. */
	indicator?: Snippet;
	children: Snippet;
}

export interface TreeItemProps {
	// Base ---
	/** Set item styles. */
	base?: string;
	/** Set item background styles. */
	background?: string;
	/** Set item styles when selected. */
	selected?: string;
	/** Set item vertical spacing styles. */
	spaceY?: string;
	/** Set item hover styles. */
	hover?: string;
	/** Set item border styles. */
	border?: string;
	/** Set item padding styles. */
	padding?: string;
	/** Set item shadow styles. */
	shadow?: string;
	/** Provide arbitrary CSS classes to the items. */
	classes?: string;

	// Logic ---
	/** The unique identifier for the item. */
	id: string;
	/** The "name" of the item. */
	value: string;
	/** Whether the item is disabled. */
	disabled?: boolean;

	// Snippets ---
	/** The lead icon for end nodes */
	icon?: Snippet;
}

export interface TreeNodeProps {
	id: string;
	value: string;
	disabled?: boolean;
	content: Snippet<[{ node: CollectionNode; nodeProps: NodeProps }]>;
}

// Zag ---

export type TreeViewApi = tree.Api<PropTypes, CollectionNode>;

export interface CollectionNode {
	id: string;
	value: string;
	indexPath: number[];
	children?: CollectionNode[];
}
