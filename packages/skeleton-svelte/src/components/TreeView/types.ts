import type { PropTypes } from '@zag-js/svelte';
import type { NodeProps } from '@zag-js/tree-view';
import * as tree from '@zag-js/tree-view';
import type { Snippet } from 'svelte';
import type { SlideParams } from 'svelte/transition';

// Components ---

export type TreeViewApi = tree.Api<PropTypes, CollectionNode>;

export interface TreeViewProps extends Omit<tree.Props, 'id' | 'collection'> {
	/** The animation configuration. */
	animationConfig?: SlideParams;

	// Data ---
	// collection?: CollectionNode[];

	// View ---
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
	controlBase?: string;
	/** Set control background styles. */
	controlBackground?: string;
	/** Set control vertical spacing styles. */
	controlSpaceY?: string;
	/** Set control hover styles. */
	controlHover?: string;
	/** Set control border styles. */
	controlBorder?: string;
	/** Set control padding styles. */
	controlPadding?: string;
	/** Set control shadow styles. */
	controlShadow?: string;
	/** Provide arbitrary CSS classes to the controls. */
	controlClasses?: string;

	// Item ---
	/** Set item styles. */
	itemBase?: string;
	/** Set item background styles. */
	itemBackground?: string;
	/** Set item vertical spacing styles. */
	itemSpaceY?: string;
	/** Set item hover styles. */
	itemHover?: string;
	/** Set item border styles. */
	itemBorder?: string;
	/** Set item padding styles. */
	itemPadding?: string;
	/** Set item shadow styles. */
	itemShadow?: string;
	/** Provide arbitrary CSS classes to the items. */
	itemClasses?: string;

	// Indent ---
	/** Set indentation amount. */
	indentAmount?: string;
	// Indicator ---
	/** Set indicator transformations when open. */
	indicatorRotationClass?: string;
	/** Set indicator transitions. */
	indicatorTransition?: string;

	// Label ---
	/** Set label snippet's styles. */
	labelBase?: string;
	/** Set label snippet's background styles. */
	labelBackground?: string;
	/** Set label snippet's vertical spacing styles. */
	labelSpaceY?: string;
	/** Set label snippet's border styles. */
	labelBorder?: string;
	/** Set label snippet's padding styles. */
	labelPadding?: string;
	/** Set label snippet's shadow styles. */
	labelShadow?: string;
	/** Provide arbitrary CSS classes to the label. */
	labelClasses?: string;

	// Snippets ---
	/** The lead icon for expandable branches. */
	branchIcon?: Snippet;
	/** The lead icon for end nodes */
	itemIcon?: Snippet;
	/** The icon to indicate if the node children are expanded. */
	branchIndicator?: Snippet;

	children?: Snippet;
	label?: Snippet;

	// Zag ---
	/** Binds the Zag API for external use. */
	onApiReady?: (api: TreeViewApi) => void;
}

export interface TreeBranchProps {
	id: string;
	value: string;
	disabled?: boolean;
	children: Snippet;
}

export interface TreeItemProps {
	id: string;
	value: string;
	disabled?: boolean;
	children?: Snippet;
}

export interface TreeNodeProps {
	id: string;
	value: string;
	disabled?: boolean;
	content: Snippet<[{ node: CollectionNode; nodeProps: NodeProps }]>;
}

export interface CollectionNode {
	id: string;
	value: string;
	indexPath: number[];
	children?: CollectionNode[];
}

export interface NodeSnippets {
	control?: Snippet;
	content?: Snippet;
	item?: Snippet;
}

export type SnippetTypes = 'item' | 'control' | 'content';

export interface TreeViewContext extends TreeViewProps {
	api: ReturnType<typeof tree.connect<PropTypes, CollectionNode>> | undefined;
	animationConfig?: SlideParams;
	// treeData: TreeData;
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
