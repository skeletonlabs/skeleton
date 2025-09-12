import type { SvelteHTMLElements } from 'svelte/elements';

export type HTMLAttributes<Element extends keyof SvelteHTMLElements> = SvelteHTMLElements[Element];
