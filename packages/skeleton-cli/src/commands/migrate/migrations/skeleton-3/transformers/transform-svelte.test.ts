import { describe, expect, it } from 'vitest';
import { transformSvelteContent } from './transform-svelte.js';

describe.skip('transformSvelteContent', () => {
	it('transforms imports', () => {
		expect(
			transformSvelteContent(`
<script>
	import { Avatar } from "@skeletonlabs/skeleton";
</script>
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<script>
	import { Avatar } from "@skeletonlabs/skeleton-svelte";
</script>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms classes', () => {
		expect(
			transformSvelteContent(`
<script>
	import { Avatar } from "@skeletonlabs/skeleton";
</script>

<Avatar rounded="rounded-token" />
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<script>
	import { Avatar } from "@skeletonlabs/skeleton-svelte";
</script>

<Avatar rounded="rounded" />
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
});
