import { writable, type Writable } from 'svelte/store';

export const drawerVisible: Writable<boolean> = writable(false);