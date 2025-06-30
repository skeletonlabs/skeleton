import * as tree from '@zag-js/tree-view';
import type { Snippet } from 'svelte';
import type { SlideParams } from 'svelte/transition';

// TreeViewContext ---

export interface TreeViewContext<T = string> extends TreeNodeProps {
	api: ReturnType<typeof tree.connect<never, Node<T>>>;
}

// Components ---

export interface TreeViewProps<T = string> extends Omit<tree.Props, 'id' | 'collection'>, TreeNodeProps {
	// Data ---
	collection: TreeViewCollection<T>;
	// View ---
	/** Set base styles. */
	base?: string;
	/** Set background styles. */
	bg?: string;
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
	// Node ---
	nodeBase: string;
	nodeBg: string;
	nodeClasses: string;
	// Label ---
	/** Set label snippet's styles. */
	labelBase?: string;
	/** Set label snippet's background styles. */
	labelBg?: string;
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
	children?: Snippet;
}

export interface TreeNodeProps {
	/** The animation configuration */
	animationConfig?: SlideParams;
	// Content ---
	/** Set content styles. */
	contentBase?: string;
	/** Set content background styles. */
	contentBg?: string;
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
	controlBg?: string;
	/** Set control vertical spacing styles. */
	controlSpaceY?: string;
	/** Set control hover styles. */
	controlHover: string;
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
	itemBg?: string;
	/** Set item vertical spacing styles. */
	itemSpaceY?: string;
	/** Set item hover styles. */
	itemHover: string;
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
	indicatorOpenRotation?: string;
	/** Set indicator transitions. */
	indicatorTransition?: string;
	// Snippets ---
	branchIcon: Snippet;
	itemIcon: Snippet;
	nodeText: Snippet<[string]>;
	nodeIndicator: Snippet;
}

export interface Node<T> {
	id: string;
	value: T;
	children?: Node<T>[];
}

export type TreeViewCollection<T> = Node<T>[];
