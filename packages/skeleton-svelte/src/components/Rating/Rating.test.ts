import { render, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";

import { Rating } from "../../index.js";
import { mockSnippet } from "../../internal/test-utils.js";

describe("Rating", () => {
	const testIds = {
		root: "rating",
		control: "rating-control",
		item: "rating-item",
		input: "rating-input",
	};

	it("Renders the component", () => {
		render(Rating, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it("Should render with a value", () => {
		const testValue = 3;
		render(Rating, { value: testValue });
		const component = screen.getByTestId(testIds.input);
		expect(component).toHaveValue(String(testValue));
	});

	it("Should render all snippets", () => {
		render(Rating, {
			value: 1,
			iconEmpty: mockSnippet("iconEmptySnippet"),
			iconHalf: mockSnippet("iconHalfSnippet"),
			iconFull: mockSnippet("iconFullSnippet"),
		});
		const component = screen.getAllByTestId(testIds.item);
		expect(component[0].children[0]).toHaveTextContent("iconFullSnippet");
		expect(component[1].children[0]).toHaveTextContent("iconEmptySnippet");
	});

	for (const prop of ["base", "classes"]) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = "bg-green-500";
			render(Rating, { [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}
});
