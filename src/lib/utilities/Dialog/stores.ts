// Dialog Store Queue

import { writable } from 'svelte/store';
import type { DialogSettings } from './types';

function dialogService() {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		/** Append to end of queue. */
		trigger: (dialog: DialogSettings) =>
			update((dStore: any) => {
				dStore.push(dialog);
				return dStore;
			}),
		/**  Remove first item in queue. */
		close: () =>
			update((dStore) => {
				if (dStore.length > 0) dStore.shift();
				return dStore;
			}),
		/** Remove all items from queue. */
		clear: () => set([])
	};
}

export const dialogStore: any = dialogService();
