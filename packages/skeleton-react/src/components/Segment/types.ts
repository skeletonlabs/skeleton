// Segment Control Types

import type * as radio from "@zag-js/radio-group";

// Context ---

export interface SegmentContextState {
	api: ReturnType<typeof radio.connect>;
	indicatorText: string;
}

// Components ---

export interface SegmentProps
	extends React.PropsWithChildren,
		Omit<radio.Props, "id"> {
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
	/** Set classes to provide a horizontal layout. */
	orientHorizontal?: string;
	/** Set classes for the disabled state. */
	stateDisabled?: string;
	/** Set classes for the read-only state. */
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

	// Label ---
	/** Set aria-labelledby for element */
	labelledby?: string;
}

export interface SegmentItemsProps
	extends React.PropsWithChildren,
		Omit<radio.ItemProps, "invalid"> {
	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	/** Set classes for the disabled state. */
	stateDisabled?: string;
	/** Set classes for the focus state. */
	stateFocused?: string;

	// Label ---
	/** Sets base classes for the label element. */
	labelBase?: string;
	/** Provide arbitrary CSS classes for the label element. */
	labelClasses?: string;
}
