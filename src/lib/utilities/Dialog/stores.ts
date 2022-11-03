// Dialog Store Queue

import { writable } from 'svelte/store';
import type { DialogSettings } from './types';

function dialogService(): any {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		// Trigger - append to end of queue
		trigger: (dialog: DialogSettings) =>
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
