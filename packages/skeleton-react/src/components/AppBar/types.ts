import type React from "react";

// Components ---

export interface AppBarProps extends React.PropsWithChildren {
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

export interface ToolBarProps extends React.PropsWithChildren {
	/** Sets the toolbar component's base styles. */
	base?: string;
	/** Sets the toolbar component's grid columns styles. */
	gridCols?: string;
	/** Sets the toolbar component's gap styles. */
	gap?: string;
	/** Provide arbitrary CSS classes to the toolbar component. */
	classes?: string;
}

export interface ToolbarLeadProps extends React.PropsWithChildren {
	/** Sets the lead component's base styles. */
	base?: string;
	/** Sets the lead component's horizontal spacing styles. */
	spaceX?: string;
	/** Sets the lead component's padding styles. */
	padding?: string;
	/** Provide arbitrary CSS classes to the lead component. */
	classes?: string;
}

export interface ToolbarCenterProps extends React.PropsWithChildren {
	/** Sets the center component's base styles. */
	base?: string;
	/** Sets the center component's alignment styles. */
	align?: string;
	/** Sets the center component's padding styles. */
	padding?: string;
	/** Provide arbitrary CSS classes to the center component. */
	classes?: string;
}

export interface ToolbarTrailProps extends React.PropsWithChildren {
	/** Sets the trail component's base styles. */
	base?: string;
	/** Sets the trail component's horizontal spacing styles. */
	spaceX?: string;
	/** Sets the trail component's padding styles. */
	padding?: string;
	/** Provide arbitrary CSS classes to the trail component. */
	classes?: string;
}

export interface AppBarHeadlineProps extends React.PropsWithChildren {
	/** Sets the headline component's base styles. */
	base?: string;
	/** Provide arbitrary CSS classes to the headline component. */
	classes?: string;
}
