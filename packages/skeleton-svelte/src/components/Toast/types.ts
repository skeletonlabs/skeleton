import * as toast from '@zag-js/toast';
import type { Snippet } from 'svelte';

export interface ToastContext {
	toaster: toast.Store;
}

export interface ToastProviderProps extends toast.StoreProps {
	children?: Snippet;
}

export interface ToastProps {
	toast: toast.Options;
	index: number;
	parent: toast.GroupService;
}
