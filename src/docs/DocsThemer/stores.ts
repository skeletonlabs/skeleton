import type { Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

// Theme Generator Live Preview State
export const storePreview: Writable<boolean> = localStorageStore('storePreview', false);
