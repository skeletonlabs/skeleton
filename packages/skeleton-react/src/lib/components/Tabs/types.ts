import React from 'react';

// Components ---

export interface TabsProps extends React.PropsWithChildren {
	/** Provide a unique ID. */
	id?: string;

	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Set vertical spacing between list and panels. */
	spaceY?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;
}

export interface TabsListProps extends React.PropsWithChildren {
	/** Sets the base styles. */
	base?: string;
	/** Sets the justification styles. */
	justify?: string;
	/** Sets the gap spacing. */
	gap?: string;
	/** Sets the border styles. */
	border?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;
}

export interface TabsControlProps extends React.PropsWithChildren {
	/** Provide a unique ID. */
	id?: string;
	/** Provide the tab control name. */
	name: string;
	/** Provide the tab control radio group. */
	group: string;
	/** Provide a hoverable title attribute. */
	title?: string;

	// A11y ---
	/** Sets the A11y label. */
	label?: string;
	/** Sets ARIA controls value to define which panel this tab controls. */
	controls?: string;

	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Sets width styles. */
	width?: string;
	/** Sets the active control styles. */
	active?: string;
	/** Sets the inactive control styles. */
	inactive?: string;
	/** Sets flex styles. */
	flex?: string;
	/** Sets background styles. */
	background?: string;
	/** Sets border styles. */
	border?: string;
	/** Sets text size styles. */
	text?: string;
	/** Sets padding styles. */
	padding?: string;
	/** Sets rounded styles. */
	rounded?: string;
	/** Sets vertical gap styles. */
	gap?: string;
	/** Sets cursor styles. */
	cursor?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Content
	/** Sets tab content base styles. */
	contentBase?: string;
	/** Sets tab content flex styles. */
	contentFlex?: string;
	/** Sets the tab content gap styles. */
	contentGap?: string;
	/** Sets the tab content background styles. */
	contentBg?: string;
	/** Sets the tab content padding styles. */
	contentPadding?: string;
	/** Sets the tab content rounded styles. */
	contentRounded?: string;
	/** Provide arbitrary CSS classes for the tab content. */
	contentClasses?: string;

	// Events ---
	/** Triggers on Tab Control click. */
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	/** Triggers on Tab Control key down. */
	onKeydown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
	/** Triggers on Tab Control key up. */
	onKeyup?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
	/** Triggers on Tab Control group change. */
	onChange?: (group: string) => void;
}

export interface TabPanelsProps extends React.PropsWithChildren {
	/** Sets wrapping panel base styles. */
	base?: string;
	/** Provide arbitrary CSS classes to the wrapping panel element. */
	classes?: string;
}

export interface TabsPanelProps extends React.PropsWithChildren {
	/** Provide a unique ID. */
	id?: string;
	/** Provide the tab panel value. */
	value: string;
	/** Provide the tab control radio group. */
	group: string;

	// A11y ---
	/** Sets the A11y labelledby. */
	labelledBy?: string;

	// Root ---
	/** Provide arbitrary CSS classes. */
	classes?: string;
}
