import * as tree from '@zag-js/tree-view';
import type { Snippet } from 'svelte';
import type { SlideParams } from 'svelte/transition';

// Components ---

export interface TreeViewProps extends Omit<tree.Props, 'id' | 'collection'> {
	/** The animation configuration. */
	animationConfig?: SlideParams;

	// Data ---
	collection: TreeViewCollection;

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
	itemBg?: string;
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
	/** The lead icon for expandable branches. */
	branchIcon?: Snippet;
	/** The lead icon for end nodes */
	itemIcon?: Snippet;
	/** The icon to indicate if the node children are expanded. */
	branchIndicator?: Snippet;
}

export interface CollectionNode {
	id: string;
	value: string;
	children?: CollectionNode[];
}

export type TreeViewCollection = CollectionNode[];
