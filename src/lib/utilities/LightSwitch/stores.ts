import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

// OS Prefers Dark Scheme - TRUE: dark | FALSE: light
export const storePrefersDarkScheme = localStorageStore<boolean>('storePrefersDarkScheme', false);

// User Selected Mode - TRUE: dark | FALSE: light | undefined: use system preference
export const storeLightSwitch = localStorageStore<boolean | undefined>('storeLightSwitch', undefined);
