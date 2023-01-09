// Drawer Stores
import { writable } from 'svelte/store';
function drawerService() {
    const { subscribe, set, update } = writable({});
    return {
        subscribe,
        set,
        update,
        /** Open the drawer. */
        open: (newSettings) => update(() => {
            return { open: true, ...newSettings };
        }),
        /** Close the drawer. */
        close: () => update((d) => {
            d.open = false;
            return d;
        })
    };
}
// Exports
export const drawerStore = drawerService();
