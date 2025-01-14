import { describe, expect, it } from 'vitest';
import { transformModule } from './transform-module.js';

describe('transformModuleContent', () => {
	it('transforms imports', () => {
		expect(
			transformModule(`
import { Avatar } from "@skeletonlabs/skeleton";

Avatar;
		`)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { Avatar } from "@skeletonlabs/skeleton-svelte";

Avatar;
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
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
