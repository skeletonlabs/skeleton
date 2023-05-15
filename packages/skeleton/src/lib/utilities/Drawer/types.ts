// Drawer Types

export interface DrawerSettings {
	open?: boolean;
	/** A unique identifier, useful for setting contents. */
	id?: string;
	/** Pass arbitrary information for your own persona use. */
	meta?: any;

	// ************************************************************
	// NOTE: the following must stay in sync with the drawer props.
	// ************************************************************

	// --- Core ---
	/** Set the anchor position.
	 * @type {'left' | 'top' | 'right' | 'bottom'}
	 */
	position?: 'left' | 'top' | 'right' | 'bottom';
	/** Define the Svelte transition animation duration.*/
	duration?: number;

	// --- Backdrop ---
	/** Backdrop - Provide classes to set the backdrop background color*/
	bgBackdrop?: string;
	/** Backdrop - Provide classes to set the blur style.*/
	blur?: string;
	/** Drawer - Provide classes to set padding.*/
	padding?: string;

	// --- Drawer ---
	/** Drawer - Provide classes to set the drawer background color.*/
	bgDrawer?: string;
	/** Drawer - Provide classes to set border color.*/
	border?: string;
	/** Drawer - Provide classes to set border radius.*/
	rounded?: string;
	/** Drawer - Provide classes to set box shadow.*/
	shadow?: string;
	/** Drawer - Provide classes to override the width.*/
	width?: string;
	/** Drawer - Provide classes to override the height.*/
	height?: string;

	// --- Regions ---
	/** Provide arbitrary classes to the backdrop region. */
	regionBackdrop?: string;
	/** Provide arbitrary classes to the drawer region. */
	regionDrawer?: string;

	// --- A11y ---
	/** Provide an ID of the element labeling the drawer.*/
	labelledby?: string;
	/** Provide an ID of the element describing the drawer.*/
	describedby?: string;
}
