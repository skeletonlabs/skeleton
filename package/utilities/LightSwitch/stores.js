import { localStorageStore } from '../LocalStorageStore/LocalStorageStore';
// OS Prefers Dark Scheme - TRUE: dark | FALSE: light
export const storePrefersDarkScheme = localStorageStore('storePrefersDarkScheme', false);
// User Selected Mode - TRUE: dark | FALSE: light | undefined: use system preference
export const storeLightSwitch = localStorageStore('storeLightSwitch', undefined);
