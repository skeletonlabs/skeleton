import type { Writable } from 'svelte/store';
import { localStorageStore } from '../LocalStorageStore/LocalStorageStore';

// Persists select theme
export const lightSwitchChecked: Writable<boolean | undefined> = localStorageStore('lightSwitchChecked', undefined); // false:light | true:dark
