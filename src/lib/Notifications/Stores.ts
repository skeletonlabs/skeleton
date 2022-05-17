// Reference: https://svelte.dev/tutorial/custom-stores

import { writable } from 'svelte/store';

// Dialogs ---

export interface DialogAlert {
    title: string;
    body: string;
    
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
export interface DialogComponent extends DialogAlert {
    component: any;
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
// export const toasts: Writable<any[]> = writable([]);