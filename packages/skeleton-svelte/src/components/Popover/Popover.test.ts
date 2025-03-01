import { render, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";

import { Popover } from "../../index.js";

describe("Popover", () => {
	const testIds = {
		root: "popover",
	};

	// NOTE: bare minimum test as this feature is considered temporary

	it("Renders the component", () => {
		render(Popover, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});
});
