// Popup Types
import type { HideOptions, Placement, ArrowOptions, FlipOptions, ShiftOptions, OffsetOptions, AutoPlacementOptions, InlineOptions, SizeOptions } from '@floating-ui/dom';

// Options & Middleware
export interface Middleware {
	// Required ---
	/** Offset middleware settings: https://floating-ui.com/docs/offset */
	offset?: Partial<OffsetOptions>;
	/** Shift middleware settings: https://floating-ui.com/docs/shift */
	shift?: Partial<ShiftOptions>;
	/** Flip middleware settings: https://floating-ui.com/docs/flip */
	flip?: Partial<FlipOptions>;
	/** Arrow middleware settings: https://floating-ui.com/docs/arrow */
	arrow?: Partial<ArrowOptions>;
	// Optional ---
	/** Size middleware settings: https://floating-ui.com/docs/size */
	size?: Partial<SizeOptions>;
	/** Auto Placement middleware settings: https://floating-ui.com/docs/autoPlacement */
	autoPlacement?: Partial<AutoPlacementOptions>;
	/** Hide middleware settings: https://floating-ui.com/docs/hide */
	hide?: Partial<HideOptions>;
	/** Inline middleware settings: https://floating-ui.com/docs/inline */
	inline?: Partial<InlineOptions>;
}

export interface PopupSettings {
	/** Provide the event type. */
	event: 'click' | 'hover' | 'focus-blur' | 'focus-click';
	/** Match the popup data value `data-popup="targetNameHere"` */
	target: string;
	/** Set the placement position. Defaults 'bottom'. */
	placement?: Placement;
	/** Query elements that close the popup when clicked. Defaults `'a[href], button'`. */
	closeQuery?: string;
	/** Optional callback function that reports state change. */
	state?: (event: { state: boolean }) => void;
	/** Provide Floating UI middleware settings. */
	middleware?: Middleware;
}
