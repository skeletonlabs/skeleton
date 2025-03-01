/// <reference types="vite/client" />

import { fileURLToPath, resolve } from "node:url";
import { describe, expect, test } from "vitest";
import { getInterfaces } from "../src/index.js";

const fixturesTest = import.meta.glob("./fixtures/*.ts", {
	query: "?raw",
});

describe("fixtures", () => {
	for (const path of Object.keys(fixturesTest)) {
		const name = path.split("/").at(-1);
		if (!name) {
			continue;
		}
		test(name, async () => {
			const actual = getInterfaces(
				resolve(fileURLToPath(import.meta.url), path),
			);
			const expected = await import(
				path.replace("fixtures", "results").replace(".ts", ".json")
			).then((module) => module.default);
			expect(actual).toStrictEqual(expected);
		});
	}
});
