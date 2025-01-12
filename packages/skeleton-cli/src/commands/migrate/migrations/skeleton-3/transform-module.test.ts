import { describe, expect, it } from "vitest";
import { transformModuleContent } from "./transform-module.js";

describe('transformModuleContent', () => {
	it('transforms imports', () => {
		expect(
			transformModuleContent(`
import { Avatar } from "@skeletonlabs/skeleton";
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { Avatar } from "@skeletonlabs/skeleton-svelte";
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms classes', () => {
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
});
