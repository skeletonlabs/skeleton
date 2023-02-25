import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

// Svelte Writable Stores ---

// Set within root layout, persists current SvelteKit $page.url.pathname
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

// Set within the root layout, set TRUE if served in Vercel production mode
export const storeVercelProductionMode: Writable<boolean> = writable(false);

// Local Storage Stores ---

// Persists select preset theme
export const storeTheme: Writable<string> = localStorageStore('storeTheme', 'skeleton');

// Persists the tab selection for the user's preferred onboarding method
export const storeOnboardMethod: Writable<string> = localStorageStore('storeOnboardMethod', 'cli');
