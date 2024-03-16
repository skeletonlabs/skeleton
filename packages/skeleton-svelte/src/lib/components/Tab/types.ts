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

	// Tab Controls ---
	/** Sets the children controls base styles. */
	controlsBase?: string;
	/** Sets the children controls text styles. */
	controlsText?: string;
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

	// Events ---
	/** Triggers on Tab Control click. */
	onclick?: (event: MouseEvent) => void;
	/** Triggers on Tab Control key press. */
	onkeypress?: (event: KeyboardEvent) => void;
	/** Triggers on Tab Control key down. */
	onkeydown?: (event: KeyboardEvent) => void;
	/** Triggers on Tab Control key up. */
	onkeyup?: (event: KeyboardEvent) => void;
	/** Triggers on Tab Control group change. */
	onchange?: (group: string) => void;

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
	/** Sets text styles. */
	text?: string;
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

	// Tab ---
	/** Sets the tab base styles. */
	tabBase?: string;
	/** Sets the tab rounded styles. */
	tabRounded?: string;
	/** Sets the tab outline styles. */
	tabOutline?: string;
	/** Provide arbitrary CSS classes for the tab. */
	tabClasses?: string;

	// Tab Content ---
	/** Sets the tab content base styles */
	contentBase?: string;
	/** Sets the tab content horizontal spacing styles. */
	contentSpaceX?: string;
	/** Provide arbitrary CSS classes to the tab content. */
	contentClasses?: string;

	// Events ---
	/** Triggers on Tab Control click. */
	onclick?: (event: MouseEvent) => void;
	/** Triggers on Tab Control key press. */
	onkeypress?: (event: KeyboardEvent) => void;
	/** Triggers on Tab Control key down. */
	onkeydown?: (event: KeyboardEvent) => void;
	/** Triggers on Tab Control key up. */
	onkeyup?: (event: KeyboardEvent) => void;
	/** Triggers on Tab Control group change. */
	onchange?: (group: string) => void;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}

// TabPanel ---

export interface TabsPanelProps {
	/** Provide the tab panel value. */
	value: string;
	/** Provide the tab control radio group. */
	group: string;

	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}
