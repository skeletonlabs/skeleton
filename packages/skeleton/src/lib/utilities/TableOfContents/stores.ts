import { writable } from 'svelte/store';
import type { tocHeadingLink } from './types.js';

export let tocStore = writable<tocHeadingLink[]>([]);
