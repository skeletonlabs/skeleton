import { writable, type Writable } from 'svelte/store';

// TODO: make these persit with window.localStorage

// Set within root layout, persists current SvelteKit $page.url.pathname
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

// Persists the tab selection for the user's preferred framework
export const storeFramework: Writable<string> = writable('sveltekit');

// Persists the mobile-only nav drawer 'open' state
export const storeMobileDrawer: Writable<boolean> = writable(false);
