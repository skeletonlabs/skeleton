// Modal Types

import type { ComponentConstructorOptions, ComponentProps, SvelteComponent } from 'svelte';

export type { ModalStore } from './stores.js';

export interface ModalParentProp {
	position: string;
	// ---
	background: string;
	width: string;
	height: string;
	padding: string;
	spacing: string;
	rounded: string;
	shadow: string;
	// ---
	buttonNeutral: string;
	buttonPositive: string;
	buttonTextCancel: string;
	buttonTextConfirm: string;
	buttonTextSubmit: string;
	// ---
	regionBackdrop: string;
	regionHeader: string;
	regionBody: string;
	regionFooter: string;
	// ---
	onClose: () => void;
}

type CustomComponent = SvelteComponent<{ parent?: Partial<ModalParentProp> }>;

export interface ModalComponent<Component extends CustomComponent = CustomComponent> {
	/** Import and provide your component reference. */
	ref: (new (options: ComponentConstructorOptions<any>) => Component) & {
		/** The custom element version of the component. Only present if compiled with the `customElement` compiler option */
		element?: typeof HTMLElement;
	};
	/** Provide component props as key/value pairs. */
	props?: Omit<ComponentProps<Component>, 'parent'>;
	/** Provide an HTML template literal for the default slot. */
	slot?: string;
}

export interface ModalSettings<V = any, C extends CustomComponent = CustomComponent, R = any, M = any> {
	/** Designate what type of component will display. */
	type: 'alert' | 'confirm' | 'prompt' | 'component';
	/** Set the modal position within the backdrop container. */
	position?: string;
	/** Provide the modal header content. Accepts HTML. */
	title?: string;
	/** Provide the modal body content. Accepts HTML. */
	body?: string;
	/** Provide a URL to display an image within the modal. */
	image?: string;
	/** By default, used to provide a prompt value. */
	value?: V;
	/** Provide input attributes as key/value pairs. */
	valueAttr?: object;
	/** Provide your component reference key or object. */
	component?: ModalComponent<C> | string;
	/** Provide a function. Returns the response value. */
	response?: (r: R) => void;
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
	meta?: M;
}
