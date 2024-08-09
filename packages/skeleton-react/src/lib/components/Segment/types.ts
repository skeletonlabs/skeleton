// Segment Control Types

import * as radio from '@zag-js/radio-group';

// Context ---

export interface SegmentContextState {
	api: ReturnType<typeof radio.connect>;
	indicatorText: string;
}

// Components ---

export interface SegmentProps extends React.PropsWithChildren, Omit<radio.Context, 'id' | 'orientation' | 'onValueChange'> {
	/** Set the orientation. */
	orientation?: radio.Context['orientation'];

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

	// States ---
	/** Set classes to provide a vertical layout. */
	orientVertical?: string;
	/** Set classes to provide a horizintal layout. */
	orientHorizontal?: string;
	/** Set claseses for the disabled state. */
	stateDisabled?: string;
	/** Set claseses for the read-only state. */
	stateReadOnly?: string;

	// Indicator ---
	/** Sets base classes to the indicator. */
	indicatorBase?: string;
	/** Sets background classes to the indicator. */
	indicatorBg?: string;
	/** Sets text classes to the indicator. */
	indicatorText?: string;
	/** Sets border radius classes to the indicator. */
	indicatorRounded?: string;
	/** Provide arbitrary CSS classes to the indicator. */
	indicatorClasses?: string;

	// Events ---
	/** Triggers when the value state is changed. */
	onValueChange?: (value: string) => void;
}

export interface SegmentItemsProps extends React.PropsWithChildren, Omit<radio.ItemProps, 'invalid'> {
	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Set active text layer styles. Should contrast the indicator. */
	labelActiveText?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	/** Set claseses for the disabled state. */
	stateDisabled?: string;

	// Label ---
	/** Sets base classes for the label element. */
	labelBase?: string;
	/** Provide arbitrary CSS classes for the label element. */
	labelClasses?: string;
}
