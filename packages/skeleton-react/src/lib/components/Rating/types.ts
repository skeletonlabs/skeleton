import React from "react";

// Context

export interface RatingContextState {
	interactive?: boolean;
	value: number;
	order: number;
	figureRef: React.RefObject<HTMLElement> | undefined;
}

// Components ---

export interface RatingProps extends React.PropsWithChildren {
    /** Sets the rating value. */
	value?: number;
	/** Sets the maximum rating value. */
	max?: number;
	/** Sets interactive mode. */
	interactive?: boolean;
	/** Sets the rating fractional granularity. */
	step?: number;

    // Root ---
	/** Sets base styles. */
	base?: string;
	/** Sets width styles. */
	width?: string;
	/** Sets text color styles. */
	text?: string;
	/** sets fill color styles. */
	fill?: string;
	/** Sets justification styles. */
	justify?: string;
	/** Sets horizontal spacing styles. */
	spaceX?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Button ---
	/** Sets the button base styles. */
	buttonBase?: string;
	/** Sets the button position styles. */
	buttonPosition?: string;
	/** Sets the button aspect ratio styles. */
	buttonAspect?: string;
	/** Provide arbitrary CSS classes to the rating button. */
	buttonClasses?: string;

	// Events ---
	/** Triggers on rating mouse down. */
	onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>, value: number) => void;
	/** Triggers on rating key down. */
	onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
	/** Triggers on rating value change. */
	onValueChange?: (value: number) => void;
}

export interface IconProps extends React.PropsWithChildren {
	/** Set base styles. */
	base?: string;
	/** Set the clip styles. */
	clip?: string;
	/** Set interactive state styles. */
	interactive?: string;
	/** Set non-interactive state styles. */
	nonInteractive?: string;
	/** Provide arbitrary CSS classes for the empty icon. */
	classes?: string;
}