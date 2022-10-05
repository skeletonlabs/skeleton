import type { Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

// OS Prefers Dark Scheme - TRUE: dark | FALSE: light
export const storePrefersDarkScheme: Writable<boolean> = localStorageStore('storePrefersDarkScheme', false);

// User Selected Mode - TRUE: dark | FALSE: light | undefined: use system preference
export const storeLightSwitch: Writable<boolean | undefined> = localStorageStore('storeLightSwitch', undefined);
