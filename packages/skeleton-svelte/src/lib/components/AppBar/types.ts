import type { Snippet } from 'svelte';

export interface AppBarProps {
	// A11y ---
	/** Provide a semantic ID for the ARIA label. */
	label?: string;
	/** Provide the ID of the element that labels the AppBar. */
	labelledby?: string;

	// Root ---
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

	// Toolbar ---
	/** Sets toolbar's base styles. */
	toolbarBase?: string;
	/** Provide arbitrary CSS classes to the toolbar. */
	toolbarClasses?: string;

	// Lead ---
	/** Sets lead's base styles. */
	leadBase?: string;
	/** Sets lead's horizontal spacing styles. */
	leadSpaceX?: string;
	/** Set lead's padding styles. */
	leadPadding?: string;
	/** Provide arbitrary CSS classes to the lead. */
	leadClasses?: string;

	// Center ---
	/** Sets center's base styles. */
	centerBase?: string;
	/** Sets center alignment styles. */
	centerAlign?: string;
	/** Set center's padding styles. */
	centerPadding?: string;
	/** Provide arbitrary CSS classes to the center. */
	centerClasses?: string;

	// Trail ---
	/** Sets trail's base styles. */
	trailBase?: string;
	/** Sets trail's horizontal spacing styles. */
	trailSpaceX?: string;
	/** Set trail's padding styles. */
	trailPadding?: string;
	/** Provide arbitrary CSS classes to the trail. */
	trailClasses?: string;

	// HeadLine ---
	/** Sets headline's base styles. */
	headlineBase?: string;
	/** Provide arbitrary CSS classes to the headline. */
	headlineClasses?: string;

	// Snippets ---
	/** The center slot. */
	children?: Snippet;
	/** The lead slot. */
	lead?: Snippet;
	/** The trail slot. */
	trail?: Snippet;
	/** The headline slot. */
	headline?: Snippet;
}
