// Modal Types

import type { ComponentType, SvelteComponent } from 'svelte';

export type { ModalStore } from './stores.js';

export interface ModalComponent {
	/** Import and provide your component reference. */
	ref: ComponentType<SvelteComponent>;
	/** Provide component props as key/value pairs. */
	props?: Record<string, unknown>;
	/** Provide an HTML template literal for the default slot. */
	slot?: string;
}

type ModalResponseRecord = {
	alert: never;
	confirm: boolean;
	prompt: string;
	component: any;
};
type ModalType = keyof ModalResponseRecord;
export type ModalSettings<Type extends ModalType = ModalType> = Type extends Type
	? {
			/** Designate what type of component will display. */
			type: Type;
			/** Set the modal position within the backdrop container. */
			position?: string;
			/** Provide the modal header content. Accepts HTML. */
			title?: string;
			/** Provide the modal body content. Accepts HTML. */
			body?: string;
			/** Provide a URL to display an image within the modal. */
			image?: string;
			/** By default, used to provide a prompt value. */
			value?: string;
			/** Provide input attributes as key/value pairs. */
			valueAttr?: object;
			/** Provide your component reference key or object. */
			component?: ModalComponent | string;
			/** Provide a function. Returns the response value. */
			response?: (r?: ModalResponseRecord[Type] | false) => void;
			/** Provide arbitrary classes to the backdrop. */
			backdropClasses?: string;
			/** Provide arbitrary classes to the modal window. */
			modalClasses?: string;
			/** Override the Cancel button label. */
			buttonTextCancel?: string;
			/** Override the Confirm button label. */
			buttonTextConfirm?: string;
			/** Override the Submit button label. */
			buttonTextSubmit?: string;
			/** Pass arbitrary data per modal instance. */
			meta?: any;
	  }
	: never;
