import { initializeModalStore } from './Modal/stores.js';

type Opts = {
	modal: boolean;
	toast: boolean;
	drawer: boolean;
	popup: boolean;
	lightswitch: boolean;
};
export function initializeStores(opts: Opts = { modal: true, toast: true, drawer: true, popup: true, lightswitch: true }) {
	const modalStore = initializeModalStore();

	return { modalStore };
}
