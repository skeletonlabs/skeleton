// Drawer Stores

import { writable } from 'svelte/store';
import type { DrawerSettings } from './types';

function drawerService() {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		set,
		update,
		/** Open the drawer. */
		open: (newSettings: DrawerSettings) =>
			update((d: any) => {
				d = { open: true, ...newSettings };
				return d;
			}),
		/** Close the drawer. */
		close: () =>
			update((d: any) => {
				d.open = false;
				return d;
			})
	};
}

// Exports
export const drawerStore: any = drawerService();
