// Dialog Store Queue

import { writable } from 'svelte/store';

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
