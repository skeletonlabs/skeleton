import type { Snippet } from 'svelte';

export interface SwitchProps {
	/** ... */
	id: string;
	/** ... */
	name: string;
	/** Set the checked state. */
	checked?: boolean;
	/** Set the disabled state. */
	disabled?: boolean;

	// Root ---
	/** Set base classes for the root element. */
	base?: string;
	/** ... */
	stateInactive?: string;
	/** ... */
	stateActive?: string;
	/** ... */
	stateDisabled?: string;
	/** ... */
	width?: string;
	/** ... */
	height?: string;
	/** ... */
	padding?: string;
	/** ... */
	rounded?: string;
	/** ... */
	hover?: string;
	/** Provide arbitrary classes to the root element. */
	classes?: string;

	// Thumb ---
	/** Set base classes for the thumb element. */
	thumbBase?: string;
	/** ... */
	thumbStateInactive?: string;
	/** ... */
	thumbStateActive?: string;
	/** ... */
	thumbRounded?: string;
	/** ... */
	thumbTranslateX?: string;
	/** ... */
	thumbTransition?: string;
	/** ... */
	thumbDuration?: string;
	/** Provide arbitrary classes to the thumb element. */
	thumbClasses?: string;

	// Snippets ---
	/** The inactive state children. */
	inactiveChild?: Snippet;
	/** The active state children. */
	activeChild?: Snippet;
}
