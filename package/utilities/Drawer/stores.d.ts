import type { DrawerSettings } from './types';
export declare const drawerStore: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<DrawerSettings>, invalidate?: ((value?: DrawerSettings | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    set: (this: void, value: DrawerSettings) => void;
    update: (this: void, updater: import("svelte/store").Updater<DrawerSettings>) => void;
    /** Open the drawer. */
    open: (newSettings?: DrawerSettings) => void;
    /** Close the drawer. */
    close: () => void;
};
