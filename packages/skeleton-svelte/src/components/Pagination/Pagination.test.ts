import { render, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import { Pagination } from "../../index.js";

// Test Data
const sourceData = [
	{ position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
	{ position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
	{ position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
	{ position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
	{ position: 5, name: "Boron", weight: 10.811, symbol: "B" },
	{ position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
	{ position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
	{ position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
	{ position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
	{ position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];
const commonProps = {
	data: sourceData,
	page: 1,
	pageSize: 3,
};

describe("Pagination", () => {
	const testIds = {
		root: "pagination",
		buttonNumeral: "pagination-button-numeral",
		altInterface: "pagination-alt-ui",
	};

	it("Renders the component", () => {
		render(Pagination, { ...commonProps });
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it("should render the component in default numeral UI mode", () => {
		render(Pagination, { ...commonProps });
		const component = screen.getAllByTestId(testIds.buttonNumeral);
		expect(component).toHaveLength(3);
	});

	it("should render the component in the alternative UI mode", () => {
		render(Pagination, { ...commonProps, alternative: true });
		const component = screen.getByTestId(testIds.altInterface);
		expect(component).toBeInTheDocument();
	});

	for (const prop of [
		"base",
		"background",
		"border",
		"gap",
		"padding",
		"rounded",
		"classes",
	]) {
		it(`Correctly applies the \`${prop}\` prop`, () => {
			const value = "bg-green-500";
			render(Pagination, { ...commonProps, [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}

	it("should render first and last buttons if required", () => {
		render(Pagination, { ...commonProps, showFirstLastButtons: true });
		const firstButton = screen.getByTestId("pagination-button-first");
		const lastButton = screen.getByTestId("pagination-button-last");
		expect(firstButton).toBeInTheDocument();
		expect(lastButton).toBeInTheDocument();
	});
});
