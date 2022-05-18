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
		trigger: (dialog: (DialogAlert|DialogAlert|DialogAlert)) => update(dStore => {
            dStore.push(dialog);
            return dStore;
        }),
        // Close - remove first item in queue
        close: () => update(dStore => {
            if (dStore.length > 0) { dStore.shift(); }
            return dStore;
        }),
        // Clear - remove all items from queue
        clear: () => set([]),
	};
}

export const dialogStore: any = dialogService();

// Toasts

export interface Toast {
    message: string;
    // label?: string;
    // action?: any;
}

function toastService(): any {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
        // Trigger - append to end of queue
		trigger: (toast: any) => update(tStore => {
            tStore.push(toast);
            return tStore;
        }),
        // Close - remove first item in queue
        close: () => update(tStore => {
            if (tStore.length > 0) { tStore.shift(); }
            return tStore;
        }),
        // Clear - remove all items from queue
        clear: () => set([]),
	};
}

export const toastStore: any = toastService();