import { describe, expect, it } from 'vitest';
import { transformSvelte } from './transform-svelte.js';

describe('transformSvelte', () => {
	it('transforms imports in instance script', () => {
		expect(
			transformSvelte(`
<script>
	import { Avatar } from "@skeletonlabs/skeleton";
</script>
		`)
				.code.trim()
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
			transformSvelte(`
<script module>
	import { Avatar } from "@skeletonlabs/skeleton";
</script>
		`)
				.code.trim()
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
			transformSvelte(`
<script>
	const classes = "rounded-token";
</script>
		`)
				.code.trim()
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
			transformSvelte(`
<script module>
	const classes = "rounded-token";
</script>
		`)
				.code.trim()
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
			transformSvelte(`
<div class="rounded-token"></div>
		`)
				.code.trim()
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
			transformSvelte(`
<div class={"rounded-token"}></div>
		`)
				.code.trim()
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
			transformSvelte(`
<div class:rounded-token={true}></div>
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<div class:rounded={true}></div>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('ignores classes in the class: directive that equal an identifier', () => {
		expect(
			transformSvelte(`
<script>
	const foo = true;
</script>
<div class:rounded-token={foo}></div>
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<script>
	const foo = true;
</script>
<div class:rounded={foo}></div>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('ignores classes in the class: directive that are also the identifier', () => {
		expect(
			transformSvelte(`
<div class:rounded-token></div>
		`)
				.code.trim()
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
