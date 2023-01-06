import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

// Svelte Writable Stores ---

// Set within root layout, persists current SvelteKit $page.url.pathname
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

// Local Storage Stores ---

// Persists the tab selection for the user's preferred framework
export const storeFramework: Writable<string> = localStorageStore('storeFramework', 'sveltekit');
