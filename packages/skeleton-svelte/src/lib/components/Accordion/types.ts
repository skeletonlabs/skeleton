import { type Snippet } from 'svelte';

// Accordion ---

export interface AccordionProps {
	/** Enables opening multiple items at once. */
	multiple?: boolean;
	/** The slide animation duration in milliseconds. */
	animDuration?: number;

	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Set padding styles. */
	padding?: string;
	/** Set vertical spacing styles. */
	spaceY?: string;
	/** Set border radius styles. */
	rounded?: string;
	/** Set the width styles. */
	width?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Snippets ---
	/** The default child slot. */
	children: Snippet;
	/** Set the open state icon. */
	iconOpen?: Snippet;
	/** Set the closed state icon. */
	iconClosed?: Snippet;
}

// Accordion Item ---

type ToggleEvent = CustomEvent<{ id: string; open: boolean }>;

export interface AccordionItemProps {
	/** Set a unique ID for the item. */
	id: string;
	/** Set the open state of the item. */
	open?: boolean;
	/** Set a disabled state for the item. */
	disabled?: boolean;

	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Set vertical spacing styles. */
	spaceY?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Control ---
	/** Sets control's base styles. */
	controlBase?: string;
	/** Sets control's the hover styles. */
	controlHover?: string;
	/** Sets control's the padding styles. */
	controlPadding?: string;
	/** Sets control's the border radius styles. */
	controlRounded?: string;
	/** Provide arbitrary CSS classes to the control. */
	controlClasses?: string;

	// Icons ---
	/** Set the base styles for the state icons. */
	iconsBase?: string;

	// Panel ---
	/** Set the panel's base styles. */
	panelBase?: string;
	/** Set the panel's padding styles. */
	panelPadding?: string;
	/** Set the panel's border-radius styles. */
	panelRounded?: string;
	/** Provide arbitrary CSS classes to the panel. */
	panelClasses?: string;

	// Events ---
	/** Triggers on item open or close. */
	ontoggle?: (toggleEvent: ToggleEvent) => void;

	// Snippets ---
	/** The control's default slot. */
	control: Snippet;
	/** The control's lead icon slot. */
	controlLead?: Snippet;
	/** The panels's default slot. */
	panel?: Snippet;
}
