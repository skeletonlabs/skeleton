import { describe, expect, it } from 'vitest';
import { transformModule } from './transform-module.js';
import { COMPONENT_MAPPINGS } from '../utility/component-mappings.js';

describe('transformModuleContent', () => {
	for (const [oldComponent, newComponent] of Object.entries(COMPONENT_MAPPINGS)) {
		it(`transforms the \`${oldComponent}\` import and its usages`, () => {
			expect(
				transformModule(`
import { ${oldComponent} } from "@skeletonlabs/skeleton";

${oldComponent};
		`)
					.code.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			).toBe(
				`
import { ${newComponent} } from "@skeletonlabs/skeleton-svelte";

${newComponent};
		`
					.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			);
		});
	}
	it('transforms classes in strings', () => {
		expect(
			transformModule(`
const foo = "rounded-token";
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
const foo = "rounded";
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('does not transform classes in imports', () => {
		expect(
			transformModule(`
import foo from "rounded-token";

foo;
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import foo from "rounded-token";

foo;
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
});
