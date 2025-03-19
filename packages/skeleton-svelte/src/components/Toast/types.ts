import * as toast from '@zag-js/toast';
import type { Snippet } from 'svelte';

export interface ToastContext {
	toaster: toast.Store;
}

export interface ToastProviderProps extends toast.StoreProps {
	// Toast ---
	/** Provide base classes for the toast cards. */
	toastBase?: string;
	/** Provide arbitrary classes for the toast cards. */
	toastClasses?: string;

	// Text Region ---
	/** Provide base classes for the text region. */
	textRegionBase?: string;
	/** Provide classes for the text region. */
	textRegionClasses?: string;

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
	/** Provide base classes for error toasts. */
	stateError?: string;
	/** Provide base classes for success toasts. */
	stateSuccess?: string;

	// Snippets ---
	children?: Snippet;
}

export interface ToastProps extends Omit<ToastProviderProps, 'children'> {
	toast: toast.Options;
	index: number;
	parent: toast.GroupService;
}
