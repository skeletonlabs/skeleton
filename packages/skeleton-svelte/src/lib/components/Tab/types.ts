import type { Snippet } from 'svelte';

// Tabs ---

export interface TabsProps {
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
	/** Sets the list snippet element's horizontal spacing styles. */
	listSpaceX?: string;
	/** Sets the list snippet element's border styles. */
	listBorder?: string;
	/** Provide arbitrary CSS classes to the list snippet. */
	listClasses?: string;

	// Tab panel ---
	/** Sets the tab panel snippet element's base styles. */
	panelBase?: string;
	/** Provide arbitrary CSS classes to the tab panel snippet. */
	panelClasses?: string;

	// Tab Controls
	/** Sets the children controls base styles. */
	controlsBase?: string;
	/** Sets the children controls Justification styles. */
	controlsJustify?: string;
	/** Sets the children controls active styles. */
	controlsActive?: string;
	/** Sets the children controls inactive styles. */
	controlsInactive?: string;
	/** Sets the children controls background styles. */
	controlsBackground?: string;
	/** Sets the children controls padding styles. */
	controlsPadding?: string;
	/** Sets the children controls rounded styles. */
	controlsRounded?: string;
	/** Sets the children controls vertical spacing styles. */
	controlsSpacingY?: string;
	/** Sets the children controls cursor styles. */
	controlsCursor?: string;
	/** Provide arbitrary CSS classes to the children controls. */
	controlsClasses?: string;

	// Snippets ---
	/** The tab list slot. */
	list?: Snippet;
	/** The tab panel slot. */
	panel?: Snippet;
}

// TabControl ---

export interface TabsControlProps {
	/** Provide the tab control name. */
	name: string;
	/** Provide the tab control radio group. */
	group: string;
	/** Provide a hoverable title attribute. */
	title?: string;

	// A11y ---
	/** Sets ARIA controls value to define which panel this tab controls. */
	controls?: string;

	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Sets background styles. */
	background?: string;
	/** Sets justification styles. */
	justify?: string;
	/** Sets the active control styles. */
	active?: string;
	/** Sets the inactive control styles. */
	inactive?: string;
	/** Sets padding styles. */
	padding?: string;
	/** Sets rounded styles. */
	rounded?: string;
	/** Sets vertical spacing styles. */
	spacingY?: string;
	/** Sets cursor styles. */
	cursor?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Tab
	/** Sets the tab content base styles */
	tabBase?: string;
	/** Sets the tab content horizontal spacing styles. */
	tabSpaceX?: string;
	/** Provide arbitrary CSS classes to the tab content. */
	tabClasses?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}
