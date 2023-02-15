// Popup Types
// Note: these are a simple iteration based on the official docs.

// Placement
// https://floating-ui.com/docs/computePosition#placement
type Placement =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'right'
	| 'right-start'
	| 'right-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'left'
	| 'left-start'
	| 'left-end';

// Middleware
interface Middleware {
	/** Offset options: https://floating-ui.com/docs/offset */
	offset?: number | Record<string, any>;
	/** Shift options: https://floating-ui.com/docs/shift */
	shift?: Record<string, any>;
	/** Flip options: https://floating-ui.com/docs/flip */
	flip?: Record<string, any>;
	/** Arrow options: https://floating-ui.com/docs/arrow */
	arrow?: Record<string, any>;
}

// Action Arguments
export interface PopupSettings {
	/** Provide the event type. */
	event: 'click' | 'hover' | 'hover-click';
	/** Match the popup data value `[data-popup]="targetNameHere"` */
	target: string;
	/** Set the placement position. Defaults 'bottom'. */
	placement?: Placement;
	/** Provide options for each middleware. */
	middleware?: Middleware;
	/** Provide an optional callback function to monitor open/close state. */
	state?: (event: { state: boolean }) => void;
}
