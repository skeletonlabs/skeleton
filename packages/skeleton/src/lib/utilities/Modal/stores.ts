// Modal Store Queue

import { writable } from 'svelte/store';
import type { ModalSettings } from './types';

function modalService() {
	const { subscribe, set, update } = writable<ModalSettings[]>([]);
	return {
		subscribe,
		set,
		update,
		/** Append to end of queue. */
		trigger: (modal: ModalSettings) =>
			update((mStore) => {
				mStore.push(modal);
				return mStore;
			}),
		/**  Remove first item in queue. */
		close: () =>
			update((mStore) => {
				if (mStore.length > 0) mStore.shift();
				return mStore;
			}),
		/** Remove all items from queue. */
		clear: () => set([])
	};
}

export const modalStore = modalService();
