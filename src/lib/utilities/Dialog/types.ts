// Dialog Types

export interface DialogComponent {
	/** Import and provide your component reference. */
	ref: any;
	/** Provide a key/value pairs of component props. */
	props?: Record<string, string>;
	/** Provide an HTML template literal for the default slot. */
	slot?: string;
}

export interface DialogSettings {
	/** Designate what type of component will display. */
	type: 'alert' | 'confirm' | 'prompt' | 'component';
	/** Provide the dialog header content. Accepts HTML. */
	title?: string;
	/** Provide the dialog body content. Accepts HTML. */
	body?: string;
	/** Provide a URL to display an image within the dialog. */
	image?: URL | string;
	/** Prompt Only - provide a prompt value. */
	value?: unknown;
	/** Provide your component reference, props, and slot details. */
	component?: DialogComponent;
	/** Provide a function. Returns the repsonse value. */
	response?: (r: any) => void;
	/** Provide abritrary classes to apply to the Dialog element. Use `!` for important. */
	classes?: string;
}
