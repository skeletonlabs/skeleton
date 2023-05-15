// Drawer Stores

import { writable } from 'svelte/store';
import type { DrawerSettings } from './types';

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

// Exports
export const drawerStore = drawerService();
