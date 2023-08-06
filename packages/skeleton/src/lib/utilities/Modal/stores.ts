// Modal Store Queue

import { writable } from 'svelte/store';
import type { ModalSettings } from './types.js';
import { getContext, setContext } from 'svelte';

const MODAL_STORE_KEY = 'modalStore';

/**
 * Must be called inside of a `.svelte` file.
 */
export function getModalStore(): ModalStore {
	const modalStore = getContext<ModalStore | undefined>(MODAL_STORE_KEY);

	if (!modalStore) throw new Error('modalStore is not initialized. Please do the following things');

	return modalStore;
}

/**
 * Initializes the modalStore
 */
export function initializeModalStore(): ModalStore {
	const modalStore = modalService();

	return setContext(MODAL_STORE_KEY, modalStore);
}

type ModalStore = ReturnType<typeof modalService>;
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
