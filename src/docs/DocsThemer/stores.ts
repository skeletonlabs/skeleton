import type { Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

// Live Preview Enabled State
export const storePreview: Writable<boolean> = localStorageStore('storePreview', false);
