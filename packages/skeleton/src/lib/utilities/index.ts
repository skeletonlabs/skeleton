import { initializeModalStore } from './Modal/stores.js';
import { initializeToastStore } from './Toast/stores.js';
import { initializeDrawerStore } from './Drawer/stores.js';

type Opts = {
	modal: boolean;
	toast: boolean;
	drawer: boolean;
	popup: boolean;
	lightswitch: boolean;
};
export function initializeStores(opts: Opts = { modal: true, toast: true, drawer: true, popup: true, lightswitch: true }) {
	const modalStore = initializeModalStore();
	const toastStore = initializeToastStore();
	const drawerStore = initializeDrawerStore();

	return { drawerStore, modalStore, toastStore };
}
