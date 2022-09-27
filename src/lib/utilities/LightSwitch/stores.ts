import type { Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

// Persist Dark Mode - false: light | true: dark
export const storeLightSwitch: Writable<boolean | undefined> = localStorageStore('storeLightSwitch', undefined);
