import type { Snippet } from 'svelte';

// TabGroup ---

export interface TabGroupProps {
	// A11Y ---
	/** Sets the tab list snippet element's A11y labelledby. */
	listLabelledBy?: string;
	/** Sets the tab panel snippet element's A11y labelledby. */
	panelLabelledBy?: string;

	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Set vertical spacing styles. */
	spaceY?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Tab list ---
	/** Sets the list snippet element's base styles. */
	listBase?: string;
	/** Sets the list snippet element's justification styles. */
	listJustify?: string;
	/** Sets the list snippet element's border styles. */
	listBorder?: string;
	/** Provide arbitrary CSS classes to the list snippet. */
	listClasses?: string;

	// Tab panel ---
	/** Sets the tab panel snippet element's base styles. */
	panelBase?: string;
	/** Provide arbitrary CSS classes to the tab panel snippet. */
	panelClasses?: string;

	// Tab Children
	/** Sets the children tabs base styles. */
	tabBase?: string;
	/** Sets the children tabs active styles. */
	tabActive?: string;
	/** Sets the children tabs background styles. */
	tabBackground?: string;
	/** Sets the children tabs padding styles. */
	tabPadding?: string;
	/** Sets the children tabs rounded styles. */
	tabRounded?: string;
	/** Sets the children tabs vertical spacing styles. */
	tabSpacingY?: string;
	/** Provide arbitrary CSS classes to the children tabs. */
	tabClasses?: string;

	// Snippets ---
	/** The tab list slot. */
	children?: Snippet;
	/** The tab panel slot. */
	panel?: Snippet;
}
