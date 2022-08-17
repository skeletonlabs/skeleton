// Reference: https://svelte.dev/tutorial/custom-stores

import { writable } from 'svelte/store';

// Dialogs ---

export interface DialogAlert {
	icon?: string;
	title: string;
	body: string;
	image?: any;
	component?: any;
	html?: any;
}
export interface DialogConfirm extends DialogAlert {
	type: string;
	result: any;
}
export interface DialogPrompt extends DialogAlert {
	type: string;
	value: any;
	result: any;
}

function dialogService(): any {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		// Trigger - append to end of queue
		trigger: (dialog: DialogAlert | DialogAlert | DialogAlert) =>
			update((dStore) => {
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

// Toasts ---

export interface ToastMessage {
	message: string;
	autohide?: boolean;
	timeout?: number;
	button?: {
		label: string;
		action: any;
	};
}

const toastDefaults: any = { message: 'Default Toast Message', autohide: true, timeout: 5000 };

function toastService(): any {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		// Trigger - append to end of queue
		trigger: (toast: any) =>
			update((tStore) => {
				let tMerged: any = { ...toastDefaults, ...toast };
				tStore.push(tMerged);
				return tStore;
			}),
		// Close - remove first item in queue
		close: () =>
			update((tStore) => {
				if (tStore.length > 0) {
					tStore.shift();
				}
				return tStore;
			}),
		// Clear - remove all items from queue
		clear: () => set([])
	};
}

export const toastStore: any = toastService();

// Handle Queue Autohide
let timeoutAutoHide: any;
toastStore.subscribe((t) => {
	// On update, clear any existing timers
	clearTimeout(timeoutAutoHide);
	// If the list is empty, return
	if (!t.length) {
		return;
	}
	// If autohide is false, return
	if (!t[0].autohide) {
		return;
	}
	// Set a timeout for the amount specified but the current visible toast
	timeoutAutoHide = setTimeout(() => {
		toastStore.close();
	}, t[0].timeout);
});
