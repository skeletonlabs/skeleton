import { writable, type Writable } from 'svelte/store';

export const storeHighlightJs: Writable<any> = writable(undefined);

// TODO: add support for other highlighters here in the future
