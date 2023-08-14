import { writable } from 'svelte/store';
import type { TOCHeadingLink } from './types.js';

/** Contains the set of table of contents link data. */
export const tocStore = writable<TOCHeadingLink[]>([]);

/** Contains the ID of the top-most visible heading when scrolling.  */
export const tocActiveId = writable<string>(undefined);
