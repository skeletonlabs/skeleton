import { writable, type Writable } from 'svelte/store';

// Persists the tab selection for the user's preferred framework
export const storeFramework: Writable<string> = writable('sveltekit');
