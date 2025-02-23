import React, { type ReactNode } from 'react';
import * as accordion from '@zag-js/accordion';

// Accordion Context ---

export interface AccordionContextState {
	animDuration: number;
	iconOpen: ReactNode;
	iconClosed: ReactNode;
	api: ReturnType<typeof accordion.connect>;
}

export interface AccordionItemContextState {
	id: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Accordion ---

export interface AccordionProps extends React.PropsWithChildren, Omit<accordion.Props, 'id' | 'orientation'> {
	/** The slide animation duration as a float value (ex: 0.2). */
	animDuration?: number;

	// Slots ---
	// https://www.totaltypescript.com/pass-component-as-prop-react
	/** Set the open state icon. */
	iconOpen?: ReactNode;
	/** Set the closed state icon. */
	iconClosed?: ReactNode;

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
}

// Accordion Item ---

export interface AccordionItemProps extends React.PropsWithChildren, accordion.ItemProps {
	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Set vertical spacing styles. */
	spaceY?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;
}

// Accordion Control ---

export interface AccordionControlProps extends React.PropsWithChildren {
	/** The heading element. */
	headingElement?: keyof React.JSX.IntrinsicElements;
	/** Set a disabled state for the item. */
	disabled?: boolean;

	// Root ---
	/** Sets control's base styles. */
	base?: string;
	/** Sets control's the hover styles. */
	hover?: string;
	/** Sets control's the padding styles. */
	padding?: string;
	/** Sets control's the border radius styles. */
	rounded?: string;
	/** Provide arbitrary CSS classes to the control. */
	classes?: string;

	// Lead ---
	/** Sets the lead's base styles */
	leadBase?: string;
	/** Provide arbitrary CSS classes to the lead. */
	leadClasses?: string;

	// Content ---
	/** Sets the lead's base styles */
	contentBase?: string;
	/** Provide arbitrary CSS classes to the content. */
	contentClasses?: string;

	// Indicator ---
	/** Sets the lead's base styles */
	indicatorBase?: string;
	/** Provide arbitrary CSS classes to the indicator. */
	indicatorClasses?: string;

	// Nodes ---
	/** The lead child slot for the control. */
	lead?: ReactNode;
}

// Accordion Panel ---

export interface AccordionPanelProps extends React.PropsWithChildren {
	/** Set the panel's base styles. */
	base?: string;
	/** Set the panel's padding styles. */
	padding?: string;
	/** Set the panel's border-radius styles. */
	rounded?: string;
	/** Provide arbitrary CSS classes to the panel. */
	classes?: string;
}
