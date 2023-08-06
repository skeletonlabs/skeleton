// Drawer Stores

import { writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';
import type { DrawerSettings } from './types.js';

const DRAWER_STORE_KEY = 'drawerStore';

/**
 * Retrieves the `drawerStore`.
 *
 * @example
 * ```ts
 * import { getDrawerStore } from "@skeletonlabs/skeleton";
 *
 * const drawerStore = getDrawerStore();
 *
 * drawerStore.open();
 * ```
 */
export function getDrawerStore(): DrawerStore {
	const drawerStore = getContext<DrawerStore | undefined>(DRAWER_STORE_KEY);

	if (!drawerStore)
		throw new Error(
			'drawerStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!'
		);

	return drawerStore;
}

/**
 * Initializes the `drawerStore`.
 */
export function initializeDrawerStore(): DrawerStore {
	const drawerStore = drawerService();

	return setContext(DRAWER_STORE_KEY, drawerStore);
}

type DrawerStore = ReturnType<typeof drawerService>;
function drawerService() {
	const { subscribe, set, update } = writable<DrawerSettings>({});
	return {
		subscribe,
		set,
		update,
		/** Open the drawer. */
		open: (newSettings?: DrawerSettings) =>
			update(() => {
				return { open: true, ...newSettings };
			}),
		/** Close the drawer. */
		close: () =>
			update((d) => {
				d.open = false;
				return d;
			})
	};
}
