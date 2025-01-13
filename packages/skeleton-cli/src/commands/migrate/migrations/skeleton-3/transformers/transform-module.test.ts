import { describe, expect, it } from 'vitest';
import { transformModuleContent } from './transform-module.js';

describe('transformModuleContent', () => {
	it('transforms imports', () => {
		expect(
			transformModuleContent(`
import { Avatar } from "@skeletonlabs/skeleton";

Avatar;
		`)
				.trim()
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
			transformModuleContent(`
const foo = "rounded-token";
		`)
				.trim()
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
			transformModuleContent(`
import foo from "rounded-token";

foo;
		`)
				.trim()
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
