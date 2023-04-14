// Popup Types
// Note: these are a simple iteration based on the official docs.

import type { PopupSettings } from "../Popup/types";

// Action Arguments
export type TooltipSettings = Omit<PopupSettings, 'target'> & {
	/** Set plain text content of tooltip */
	content: string,
	/** Set to display an arrow */
	arrow?: boolean
};