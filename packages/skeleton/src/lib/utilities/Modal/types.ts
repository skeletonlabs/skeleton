// Modal Types

import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';

export type { ModalStore } from './stores.js';

export interface ModalComponent<Component extends SvelteComponent = SvelteComponent> {
	/** Import and provide your component reference. */
	ref: ComponentType<Component>;
	/** Provide component props as key/value pairs. */
	props?: ComponentProps<Component>;
	/** Provide an HTML template literal for the default slot. */
	slot?: string;
}

type ModalResponseRecord = {
	alert: never;
	confirm: boolean;
	prompt: string;
	component: any;
};
export type ModalType = keyof ModalResponseRecord;
export type ModalSettings<Type extends ModalType = ModalType, Component extends SvelteComponent = SvelteComponent> = Type extends Type
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
			valueAttr?: HTMLInputAttributes;
			/** Provide your component reference key or object. Type has to be `component` to take effect */
			component?: Type extends 'component' ? ModalComponent<Component> | string : never;
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
