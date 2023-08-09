import { writable } from 'svelte/store';
import type { tocHeadingLink } from './types.js';

/** Contains the set of table of contents link data. */
export const tocStore = writable<tocHeadingLink[]>([]);

/** Contains the ID of the top-most visible heading when scrolling.  */
export const tocActiveId = writable<string>(undefined);
