// Source: https://github.com/joshnuss/svelte-local-storage-store
// https://github.com/joshnuss/svelte-local-storage-store/blob/master/index.ts
// Represents version v0.3.1 (2022-08-21)
import { writable as internal, get } from 'svelte/store';
/* eslint-disable @typescript-eslint/no-explicit-any */
const stores = {};
function getStorage(type) {
    return type === 'local' ? localStorage : sessionStorage;
}
export function localStorageStore(key, initialValue, options) {
    const serializer = options?.serializer ?? JSON;
    const storageType = options?.storage ?? 'local';
    const browser = typeof window !== 'undefined' && typeof document !== 'undefined';
    function updateStorage(key, value) {
        if (!browser)
            return;
        getStorage(storageType).setItem(key, serializer.stringify(value));
    }
    if (!stores[key]) {
        const store = internal(initialValue, (set) => {
            const json = browser ? getStorage(storageType).getItem(key) : null;
            if (json) {
                set(serializer.parse(json));
            }
            if (browser) {
                const handleStorage = (event) => {
                    if (event.key === key)
                        set(event.newValue ? serializer.parse(event.newValue) : null);
                };
                window.addEventListener('storage', handleStorage);
                return () => window.removeEventListener('storage', handleStorage);
            }
        });
        const { subscribe, set } = store;
        stores[key] = {
            set(value) {
                updateStorage(key, value);
                set(value);
            },
            update(updater) {
                const value = updater(get(store));
                updateStorage(key, value);
                set(value);
            },
            subscribe
        };
    }
    return stores[key];
}
