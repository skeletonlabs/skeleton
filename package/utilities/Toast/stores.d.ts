import type { ToastSettings, Toast } from './types';
export declare const toastStore: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<Toast[]>, invalidate?: ((value?: Toast[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    /** Add a new toast to the queue. */
    trigger: (toast: ToastSettings) => void;
    /** Remove first toast in queue */
    close: (id: string) => void;
    /** Remove all toasts from queue */
    clear: () => void;
};
