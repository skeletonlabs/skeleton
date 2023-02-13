// Modal Types

export interface ModalComponent {
	/** Import and provide your component reference. */
	ref: any;
	/** Provide a key/value pairs of component props. */
	props?: Record<string, unknown>;
	/** Provide an HTML template literal for the default slot. */
	slot?: string;
}

export interface ModalSettings {
	/** Designate what type of component will display. */
	type: 'alert' | 'confirm' | 'prompt' | 'component';
	/** Provide the modal header content. Accepts HTML. */
	title?: string;
	/** Provide the modal body content. Accepts HTML. */
	body?: string;
	/** Provide a URL to display an image within the modal. */
	image?: string;
	/** By default, used to provide a prompt value. */
	value?: any;
	/** Provide input attributes as key/value pairs. */
	valueAttr?: Object;
	/** Provide your component reference, props, and slot details. */
	component?: ModalComponent | string;
	/** Provide a function. Returns the repsonse value. */
	response?: (r: any) => void;
	/** Provide abitrary classes to the backdrop. */
	backdropClasses?: string;
	/** Provide abitrary classes to the modal window. */
	modalClasses?: string;
	/** Override the Cancel button label. */
	buttonTextCancel?: string;
	/** Override the Confirm button label. */
	buttonTextConfirm?: string;
	/** Override the Submit button label. */
	buttonTextSubmit?: string;
	/** Pass abitrary data per modal instance. */
	meta?: any;
}
