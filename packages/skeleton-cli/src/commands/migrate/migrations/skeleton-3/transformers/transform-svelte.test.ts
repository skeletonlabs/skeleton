import { describe, expect, it } from 'vitest';
import { transformSvelteContent } from './transform-svelte.js';

describe('transformSvelteContent', () => {
	it('transforms imports in instance script', () => {
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
	it('transforms imports in module script', () => {
		expect(
			transformSvelteContent(`
<script module>
	import { Avatar } from "@skeletonlabs/skeleton";
</script>
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<script module>
	import { Avatar } from "@skeletonlabs/skeleton-svelte";
</script>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms classes in instance script', () => {
		expect(
			transformSvelteContent(`
<script>
	const classes = "rounded-token";
</script>
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<script>
	const classes = "rounded";
</script>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms classes in module script', () => {
		expect(
			transformSvelteContent(`
<script module>
	const classes = "rounded-token";
</script>
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<script module>
	const classes = "rounded";
</script>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms classes in an attribute', () => {
		expect(
			transformSvelteContent(`
<div class="rounded-token"></div>
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<div class="rounded"></div>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms classes in an expression attribute', () => {
		expect(
			transformSvelteContent(`
<div class={"rounded-token"}></div>
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<div class={"rounded"}></div>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms classes in the class: directive', () => {
		expect(
			transformSvelteContent(`
<div class:rounded-token={true}></div>
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<div class:rounded={true}></div>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('ignores classes in the class: directive that are also an identifier', () => {
		expect(
			transformSvelteContent(`
<div class:rounded-token></div>
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<div class:rounded-token></div>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
});
