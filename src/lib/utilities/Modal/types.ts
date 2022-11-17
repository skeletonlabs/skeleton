// Modal Types

export interface ModalComponent {
	/** Import and provide your component reference. */
	ref: any;
	/** Provide a key/value pairs of component props. */
	props?: Record<string, string>;
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
	image?: URL | string;
	/** Prompt Only - provide a prompt value. */
	value?: unknown;
	/** Provide your component reference, props, and slot details. */
	component?: ModalComponent;
	/** Provide a function. Returns the repsonse value. */
	response?: (r: any) => void;
	/** Provide abritrary classes to apply to the Modal element. Use `!` for important. */
	classes?: string;
}
