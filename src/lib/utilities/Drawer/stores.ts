// Drawer Stores

import { writable, type Writable } from 'svelte/store';
import type { DrawerSettings } from './types';

function drawerService() {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		set,
		update,
		/** Close the drawer. */
		open: (newSettings: DrawerSettings) =>
			update((d: DrawerSettings) => {
				return { ...(newSettings || {}), open: true };
			}),
		/** Close the drawer. */
		close: () =>
			update((d: DrawerSettings) => {
				d.open = false;
				return d;
			})
	};
}

// Exports
export const drawerStore: any = drawerService();
