import { createRawSnippet } from 'svelte';
import type { Snippet } from 'svelte';

/** Use `mockSnippet(value)` to create `<span>{value}</span>` snippet content. */
export function mockSnippet(key: string): Snippet<[]> {
	return createRawSnippet(() => {
		return {
			render: () => `<span>${key}</span>`
		};
	});
}
