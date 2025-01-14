import { describe, expect, it } from 'vitest';
import { transformSvelte } from './transform-svelte.js';
import { COMPONENT_MAPPINGS } from '../utility/component-mappings.js';
import { REMOVED_COMPONENTS } from '../utility/removed-components.js';

describe('transformSvelte', () => {
	for (const removedComponent of REMOVED_COMPONENTS) {
		for (const script of ['instance', 'module']) {
			it(`removes the \`${removedComponent}\` named import and import declaration (${script})`, () => {
				expect(
					transformSvelte(`
<script${script === 'module' ? ' module' : ''}>
	import { ${removedComponent} } from "@skeletonlabs/skeleton";

	${removedComponent};
</script>

<${removedComponent} />
		`)
						.code.trim()
						.replace(/\r\n|\r|\n/g, '\n')
				).toBe(
					`
<script${script === 'module' ? ' module' : ''}>
\t

	${removedComponent};
</script>

<${removedComponent} />
		`
						.trim()
						.replace(/\r\n|\r|\n/g, '\n')
				);
			});
			it(`removes the \`${removedComponent}\` named import and keeps the other named imports (${script})`, () => {
				expect(
					transformSvelte(`
<script${script === 'module' ? ' module' : ''}>
	import { Foo,
${removedComponent} } from "@skeletonlabs/skeleton";

	Foo;
	${removedComponent};
</script>

<Foo />
<${removedComponent} />
		`)
						.code.trim()
						.replace(/\r\n|\r|\n/g, '\n')
				).toBe(
					`
<script${script === 'module' ? ' module' : ''}>
	import { Foo } from "@skeletonlabs/skeleton-svelte";

	Foo;
	${removedComponent};
</script>

<Foo />
<${removedComponent} />
		`
						.trim()
						.replace(/\r\n|\r|\n/g, '\n')
				);
			});
			it(`removes the \`${removedComponent}\` named import and keeps the default import (${script})`, () => {
				expect(
					transformSvelte(`
<script${script === 'module' ? ' module' : ''}>
	import Foo, { ${removedComponent}, Bar } from "@skeletonlabs/skeleton";

	Foo;
	${removedComponent};
	Bar;
</script>

<Foo />
<${removedComponent} />
<Bar />
		`)
						.code.trim()
						.replace(/\r\n|\r|\n/g, '\n')
				).toBe(
					`
<script${script === 'module' ? ' module' : ''}>
	import Foo, { Bar } from "@skeletonlabs/skeleton-svelte";

	Foo;
	${removedComponent};
	Bar;
</script>

<Foo />
<${removedComponent} />
<Bar />
		`
						.trim()
						.replace(/\r\n|\r|\n/g, '\n')
				);
			});
		}
	}
	for (const [oldComponent, newComponent] of Object.entries(COMPONENT_MAPPINGS)) {
		for (const script of ['instance', 'module']) {
			it(`transforms the \`${oldComponent}\` import and its usages (${script})`, () => {
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
	const foo = "rounded-token";
</script>
		`)
					.code.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			).toBe(
				`
<script${script === 'module' ? ' module' : ''}>
	const foo = "rounded";
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
