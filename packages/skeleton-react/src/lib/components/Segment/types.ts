// Segment Control Types

import * as radio from '@zag-js/radio-group';

// Context ---

export interface SegmentContextState {
	api: ReturnType<typeof radio.connect>;
}

// Components ---

export interface SegmentProps extends React.PropsWithChildren, Omit<radio.Context, 'id' | 'onValueChange'> {
	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Set background classes. */
	background?: string;
	/** Set border classes. */
	border?: string;
	/** Set flex direction classes. */
	flexDirection?: string;
	/** Set gap classes. */
	gap?: string;
	/** Set padding classes. */
	padding?: string;
	/** Set rounded classes. */
	rounded?: string;
	/** Set width classes. */
	width?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Indicator
	/** TODO. */
	indicatorBase?: string;
	/** TODO. */
	indicatorBg?: string;
	/** TODO. */
	indicatorRounded?: string;
	/** TODO. */
	indicatorClasses?: string;

	// Events ---
	/** Triggers when the value state is changed. */
	onValueChange?: (value: string) => void;
}

export interface SegmentItemsProps extends React.PropsWithChildren {
	/** Provide the unique option value. */
	value: string;

	// Root ---
	/** Sets base classes. */
	base?: string;
	/** TODO. */
	labelActiveText?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Label ---
	/** Sets base classes for the label element. */
	labelBase?: string;
	/** Provide arbitrary CSS classes for the label element. */
	labelClasses?: string;
}
