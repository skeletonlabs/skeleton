import { fs, vol } from "memfs";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { getInterfaces } from "../src/index.js";

vi.mock("node:fs");

beforeEach(() => {
	vol.reset();
});

describe("options", () => {
	describe("matcher", () => {
		test("should only match interfaces with the given name", () => {
			fs.writeFileSync(
				"/matcher.ts",
				`
interface FooProps {
	foo: string;
}
interface BarProps {
	bar: number;
}
`,
			);
			const interfaces = getInterfaces("/matcher.ts", {
				matcher: /^FooProps$/,
			});
			expect(interfaces).toStrictEqual([
				{
					name: "FooProps",
					properties: [
						{
							documentation: {
								tags: [],
								text: null,
							},
							name: "foo",
							type: "string",
							typeKind: "primitive",
							required: true,
						},
					],
				},
			]);
		});
	});
	describe("transformProperty", () => {
		test("should transform properties", () => {
			fs.writeFileSync(
				"/transformProperty.ts",
				`
interface FooProps {
	foo: string;
	bar: string;
}
`,
			);

			const interfaces = getInterfaces("/transformProperty.ts", {
				transformProperty(property) {
					if (property.name === "foo") {
						return {
							...property,
							type: "number",
						};
					}
					return property;
				},
			});
			expect(interfaces).toStrictEqual([
				{
					name: "FooProps",
					properties: [
						{
							documentation: {
								tags: [],
								text: null,
							},
							name: "foo",
							type: "number",
							typeKind: "primitive",
							required: true,
						},
						{
							documentation: {
								tags: [],
								text: null,
							},
							name: "bar",
							type: "string",
							typeKind: "primitive",
							required: true,
						},
					],
				},
			]);
		});
	});
});
