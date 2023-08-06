import { initializeModalStore } from './Modal/stores.js';
import { initializeToastStore } from './Toast/stores.js';
import { initializeDrawerStore } from './Drawer/stores.js';

export function initializeStores() {
	const modalStore = initializeModalStore();
	const toastStore = initializeToastStore();
	const drawerStore = initializeDrawerStore();

	return { drawerStore, modalStore, toastStore };
}
