import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';
import type { MenuNavLink } from './DocsNavigation/links';

// Svelte Writable Stores ---

/** Set within root layout, persists current SvelteKit $page.url.pathname */
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

/** Persists the mobile-only nav drawer 'open' state */
export const storeMobileDrawer: Writable<boolean> = writable(false);

// Local Storage Stores ---

/** Persists select preset theme */
export const storeTheme: Writable<string> = localStorageStore('storeTheme', 'skeleton');

/** Persists the tab selection for the user's preferred framework */
export const storeFramework: Writable<string> = localStorageStore('storeFramework', 'sveltekit');

/** Persists recently searched  */
export const storeRecentlySearched: Writable<MenuNavLink[]> = localStorageStore('storeRecentlySearched', []);

/** Persists user-saved searched */
export const storeFavSearch: Writable<MenuNavLink[]> = localStorageStore('storeFavSearch', []);
