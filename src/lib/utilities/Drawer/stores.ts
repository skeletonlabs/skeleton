// Drawer Stores

import { writable, type Writable } from 'svelte/store';
import type { DrawerSettings } from './types';

const defaultSettings: DrawerSettings = {
	open: false,
	key: undefined,
	position: 'left'
};

function drawerService() {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		set,
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

// Set Default Settings
drawerStore.set(defaultSettings);
