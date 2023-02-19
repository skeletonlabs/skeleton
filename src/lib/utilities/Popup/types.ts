// Popup Types
// Note: these are a simple iteration based on the official docs.

type Direction = 'top' | 'bottom' | 'left' | 'right';
/** Placement https://floating-ui.com/docs/computePosition#placement */
type Placement = Direction | `${Direction}-start` | `${Direction}-end`;

// Options & Middlware
interface Options {
	/** Offset options: https://floating-ui.com/docs/offset */
	offset?: number | Record<string, any>;
	/** Shift options: https://floating-ui.com/docs/shift */
	shift?: Record<string, any>;
	/** Flip options: https://floating-ui.com/docs/flip */
	flip?: Record<string, any>;
	/** Arrow options: https://floating-ui.com/docs/arrow */
	arrow?: { element: string } & Record<string, any>;
}

// Action Arguments
export interface PopupSettings {
	/** Provide the event type. */
	event: 'click' | 'hover' | 'hover-click';
	/** Match the popup data value `[data-popup]="targetNameHere"` */
	target: string;
	/** Set the placement position. Defaults 'bottom'. */
	placement?: Placement;
	/** Provide additional options and middleware settings. */
	options?: Options;
	/** Provide an optional callback function to monitor open/close state. */
	state?: (event: { state: boolean }) => void;
}
