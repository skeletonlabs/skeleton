import type { ModalSettings } from './types';
export declare const modalStore: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<ModalSettings[]>, invalidate?: ((value?: ModalSettings[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    set: (this: void, value: ModalSettings[]) => void;
    update: (this: void, updater: import("svelte/store").Updater<ModalSettings[]>) => void;
    /** Append to end of queue. */
    trigger: (modal: ModalSettings) => void;
    /**  Remove first item in queue. */
    close: () => void;
    /** Remove all items from queue. */
    clear: () => void;
};
