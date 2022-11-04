// Toast Store Queue

import { writable } from 'svelte/store';

const toastDefaults: any = { message: 'Default Toast Message', autohide: true, timeout: 5000 };

function toastService(): any {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		// Trigger - append to end of queue
		trigger: (toast: any) =>
			update((tStore: any) => {
				let tMerged: any = { ...toastDefaults, ...toast };
				tStore.push(tMerged);
				return tStore;
			}),
		// Close - remove first item in queue
		close: (index: number) =>
			update((tStore) => {
				if (tStore.length > 0) {
					// tStore.shift();
					tStore.splice(index, 1);
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
toastStore.subscribe((t: any) => {
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
