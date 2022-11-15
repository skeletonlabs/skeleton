// Toast Store Queue

import { writable } from 'svelte/store';
import type { ToastSettings } from './types';

const toastDefaults: ToastSettings = { message: 'Missing Toast Message', autohide: true, timeout: 5000 };

// Note for security; differentiates the queued toasts
function randomUUID(): string {
	const random = Math.random();
	return Number(random).toString(32);
}

// If toast should auto-hide, wait X time, then close by ID
function handleAutoHide(toast: ToastSettings): void {
	console.log(toast);
	if (toast.autohide === true) {
		setTimeout(() => {
			toastStore.close(toast.id);
		}, toast.timeout);
	}
}

function toastService(): any {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		/** Add a new toast to the queue. */
		trigger: (toast: ToastSettings) =>
			update((tStore: any) => {
				const id: string = randomUUID();
				// Merge into store
				let tMerged: ToastSettings = { ...toastDefaults, ...toast, id };
				tStore.push(tMerged);
				// Handle auto-hide, if needed
				handleAutoHide(tMerged);
				// Return
				return tStore;
			}),
		/** Remove first toast in queue */
		close: (id: string) =>
			update((tStore) => {
				if (tStore.length > 0) {
					var index = tStore.findIndex((t: ToastSettings) => t.id === id);
					tStore.splice(index, 1);
				}
				return tStore;
			}),
		/** Remove all toasts from queue */
		clear: () => set([])
	};
}

export const toastStore = toastService();
