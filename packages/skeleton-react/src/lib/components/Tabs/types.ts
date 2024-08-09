import React, { ReactNode } from 'react';
import * as tabs from '@zag-js/tabs';

// Context ---

export interface TabsContextState {
	fluid: boolean;
	api: ReturnType<typeof tabs.connect>;
}

// Components ---

export interface TabsRootProps extends React.PropsWithChildren, Omit<tabs.Context, 'id' | 'orientation' | 'onValueChange'> {
	fluid?: boolean;

	// Root ---
	/** Set base classes for the root element. */
	base?: string;
	/** Provide arbitrary classes for the root element. */
	classes?: string;

	// Events ---
	/** Triggers when the value state is changed. */
	onValueChange?: (value: string) => void;
}

export interface TabsListProps extends React.PropsWithChildren {
	// Root ---
	/** Set base classes for the list element. */
	base?: string;
	/** Set justify classes for the list element. */
	justify?: string;
	/** Set border classes for the list element. */
	border?: string;
	/** Set margin classes for the list element. */
	margin?: string;
	/** Set gap classes for the list element. */
	gap?: string;
	/** Provide arbitrary classes for the list element. */
	classes?: string;
}

export interface TabsControlProps extends React.PropsWithChildren, tabs.TriggerProps {
	// Root ---
	/** Set base classes for the control element. */
	base?: string;
	/** Set padding classes for the control element. */
	padding?: string;
	/** Set x-axis translate classes for the control element. */
	translateX?: string;
	/** Provide arbitrary classes for the control element. */
	classes?: string;

	// Label ---
	/** Set base classes for the label element. */
	labelBase?: string;
	/** Provide arbitrary classes for the label element. */
	labelClasses?: string;

	// State ---
	/** Set inactive classes for the control element. */
	stateInactive?: string;
	/** Set active classes for the control element. */
	stateActive?: string;
	/** Set inactive classes for the label element. */
	stateLabelInactive?: string;
	/** Set active classes for the label element. */
	stateLabelActive?: string;

	// Nodes ---
	/** The lead node for the control element. */
	lead?: ReactNode;
}

export interface TabsContentProps extends React.PropsWithChildren {
	// Root ---
	/** Set base classes for the panel group element. */
	base?: string;
	/** Provide arbitrary classes for the panel group element. */
	classes?: string;
}

export interface TabsPanelProps extends React.PropsWithChildren, tabs.ContentProps {
	// Root ---
	/** Set base classes for the panel element. */
	base?: string;
	/** Provide arbitrary classes for the panel element. */
	classes?: string;
}
