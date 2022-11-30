// Drawer Types

export interface DrawerSettings {
	/** The open state of the drawer. */
	open: boolean;
	/** A unique identifier, useful for setting contents. */
	id?: string;
	/** Set the anchor position.
	 * @type {'left' | 'top' | 'right' | 'bottom'}
	 */

	// --- Core ---

	/** Set the anchor position.
	 * @type {'left' | 'top' | 'right' | 'bottom'}
	 */
	position?: string;
	/** Define the Svelte transition animation duration.*/
	duration?: number;

	// --- Backdrop ---

	/** Backdrop - Provide classes to set the backdrop background color*/
	bgBackdrop?: string;
	/** Backdrop - Provide classes to set the blur style.*/
	blur?: string;

	// --- Drawer ---

	/** Drawer - Provide classes to set the drawer background color.*/
	bgDrawer?: string;
	/** Drawer - Provide classes to set border color.*/
	border?: string;
	/** Drawer - Provide classes to set border radius.*/
	rounded?: string;
	/** Drawer - Provide classes to override the width.*/
	width?: string;
	/** Drawer - Provide classes to override the height.*/
	height?: string;
	/** Drawer - Provide classes to set margins.*/
	margin?: string;

	// --- A11y ---

	/** Provide an ID of the element labeling the drawer.*/
	labelledby?: string;
	/** Provide an ID of the element describing the drawer.*/
	describedby?: string;
}
