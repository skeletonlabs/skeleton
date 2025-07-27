import * as toast from '@zag-js/toast';

export interface ToasterProps extends toast.StoreProps {
	// Toaster ---
	toaster: toast.Store;

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
	btnDismissBase?: string;
	/** Provide arbitrary classes for the dismiss button. */
	btnDismissClasses?: string;

	// Accessibility ---
	/** Provide the title attribute for the dismiss button. */
	btnDismissTitle?: string;
	/** Provide the aria-label attribute for the dismiss button. */
	btnDismissAriaLabel?: string;

	// State ---
	/** Provide base classes for info toasts. */
	stateInfo?: string;
	/** Provide base classes for success toasts. */
	stateSuccess?: string;
	/** Provide base classes for warning toasts. */
	stateWarning?: string;
	/** Provide base classes for error toasts. */
	stateError?: string;
}

export interface ToastProps extends Omit<ToasterProps, 'toaster'> {
	toast: toast.Options;
	index: number;
	parent: toast.GroupService;
}
