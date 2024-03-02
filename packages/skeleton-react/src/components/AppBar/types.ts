import React from "react";

// Components ---

export interface AppBarProps extends React.PropsWithChildren {
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
}

export interface AppBarToolBarProps extends React.PropsWithChildren {
    /** Sets toolbar's base styles. */
	base?: string;
	/** Provide arbitrary CSS classes to the toolbar. */
	classes?: string;
}

export interface AppBarLeadProps extends React.PropsWithChildren {
    /** Sets lead's base styles. */
	base?: string;
	/** Sets lead's horizontal spacing styles. */
	spaceX?: string;
	/** Set lead's padding styles. */
	padding?: string;
	/** Provide arbitrary CSS classes to the lead. */
	classes?: string;
}

export interface AppBarCenterProps extends React.PropsWithChildren {
    /** Sets center's base styles. */
	base?: string;
	/** Sets center alignment styles. */
	align?: string;
	/** Set center's padding styles. */
	padding?: string;
	/** Provide arbitrary CSS classes to the center. */
	classes?: string;
}

export interface AppBarTrailProps extends React.PropsWithChildren {
    /** Sets trail's base styles. */
	base?: string;
	/** Sets trail's horizontal spacing styles. */
	spaceX?: string;
	/** Set trail's padding styles. */
	padding?: string;
	/** Provide arbitrary CSS classes to the trail. */
	classes?: string;
}

export interface AppBarHeadlineProps extends React.PropsWithChildren {
    /** Sets headline's base styles. */
	base?: string;
	/** Provide arbitrary CSS classes to the headline. */
	classes?: string;

}