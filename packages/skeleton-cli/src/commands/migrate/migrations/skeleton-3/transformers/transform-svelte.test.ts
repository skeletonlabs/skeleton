import { describe, expect, it } from 'vitest';
import { transformSvelte } from './transform-svelte.js';
import { COMPONENT_MAPPINGS } from '../utility/component-mappings.js';

describe('transformSvelte', () => {
	for (const [oldComponent, newComponent] of Object.entries(COMPONENT_MAPPINGS)) {
		for (const script of ['instance', 'module']) {
			it(`transforms the \`${oldComponent}\` import and its usages in the \`${script}\` script`, () => {
				expect(
					transformSvelte(`
<script${script === 'module' ? ' module' : ''}>
	import { ${oldComponent} } from "@skeletonlabs/skeleton";

	${oldComponent};
</script>

<${oldComponent} />
		`)
						.code.trim()
						.replace(/\r\n|\r|\n/g, '\n')
				).toBe(
					`
<script${script === 'module' ? ' module' : ''}>
	import { ${newComponent} } from "@skeletonlabs/skeleton-svelte";

	${newComponent};
</script>

<${newComponent} />
		`
						.trim()
						.replace(/\r\n|\r|\n/g, '\n')
				);
			});
		}
	}
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
	for (const script of ['instance', 'module']) {
		it(`transforms classes in the \`${script}\` script`, () => {
			expect(
				transformSvelte(`
<script${script === 'module' ? ' module' : ''}>
	const classes = "rounded-token";
</script>
		`)
					.code.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			).toBe(
				`
<script${script === 'module' ? ' module' : ''}>
	const classes = "rounded";
</script>
		`
					.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			);
		});
	}
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
