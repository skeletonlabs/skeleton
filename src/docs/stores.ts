import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

// Svelte Writable Stores ---

// Set within root layout, persists current SvelteKit $page.url.pathname
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

// Persists the mobile-only nav drawer 'open' state
export const storeMobileDrawer: Writable<boolean> = writable(false);

// Local Storage Stores ---

// Persists select theme
export const storeTheme: Writable<string> = localStorageStore('storeTheme', 'skeleton');

// Persists the tab selection for the user's preferred framework
export const storeFramework: Writable<string> = localStorageStore('storeFramework', 'sveltekit');
