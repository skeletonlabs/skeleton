// Dialog Store Queue

import { writable } from 'svelte/store';

export interface DialogComponent {
	/** Import and provide your component reference. */
	ref: any;
	/** Provide a key/value pairs of component props. */
	props?: Record<string, string>;
	/** Provide an HTML template literal for the default slot. */
	slot?: string;
}

export interface Dialog {
	/** Designate what type of component will display. */
	type: 'alert' | 'confirm' | 'prompt' | 'component';
	/** Provide the dialog header content. Accepts HTML. */
	title?: string;
	/** Provide the dialog body content. Accepts HTML. */
	body?: string;
	/** Provide a URL to display an image within the dialog. */
	image?: any;
	/** Prompt Only - provide a prompt value. */
	value?: any;
	/** Provide {component, props} to create a generate a custom component. */
	component?: DialogComponent;
	/** Provide a function. Returns the repsonse value. */
	response?: any;
	/** Provide abritrary classes to apply to the Dialog element. Use `!` for important. */
	classes?: string;
}

function dialogService(): any {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		// Trigger - append to end of queue
		trigger: (dialog: Dialog) =>
			update((dStore: any) => {
				dStore.push(dialog);
				return dStore;
			}),
		// Close - remove first item in queue
		close: () =>
			update((dStore) => {
				if (dStore.length > 0) {
					dStore.shift();
				}
				return dStore;
			}),
		// Clear - remove all items from queue
		clear: () => set([])
	};
}

export const dialogStore: any = dialogService();
