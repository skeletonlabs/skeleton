import * as toast from '@zag-js/toast';
import type { Snippet } from 'svelte';

export interface ToastContext {
	toaster: toast.Store;
}

export interface ToastProviderProps extends toast.StoreProps {
	// Toast ---
	/** Provide base classes for the root element. */
	base?: string;
	/** Provide width classes for the root element. */
	width?: string;
	/** Provide padding classes for the root element. */
	padding?: string;
	/** Provide border radius classes for the root element. */
	rounded?: string;
	/** Provide arbitrary classes for the toast cards. */
	classes?: string;

	// Message ---
	/** Provide base classes for the message. */
	messageBase?: string;
	/** Provide classes for the message. */
	messageClasses?: string;

	// Title ---
	/** Provide base classes for the title. */
	titleBase?: string;
	/** Provide classes for the title. */
	titleClasses?: string;

	// Description ---
	/** Provide base classes for the description. */
	descriptionBase?: string;
	/** Provide classes for the description. */
	descriptionClasses?: string;

	// Dismiss Button ---
	/** Provide base classes for the dismiss button. */
	buttonDismissBase?: string;
	/** Provide arbitrary classes for the dismiss button. */
	buttonDismissClasses?: string;

	// State ---
	/** Provide base classes for info toasts. */
	stateInfo?: string;
	/** Provide base classes for success toasts. */
	stateSuccess?: string;
	/** Provide base classes for error toasts. */
	stateError?: string;

	// Snippets ---
	children?: Snippet;
}

export interface ToastProps extends Omit<ToastProviderProps, 'children'> {
	toast: toast.Options;
	index: number;
	parent: toast.GroupService;
}
