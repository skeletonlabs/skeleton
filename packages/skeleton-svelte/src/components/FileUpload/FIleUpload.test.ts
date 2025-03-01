import { render, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";

import { FileUpload } from "../../index.js";
import { mockSnippet } from "../../internal/test-utils.js";

describe("FileUpload", () => {
	const testIds = {
		root: "uploader",
		input: "uploader-input",
		filesList: "uploader-files-list",
	};

	it("Renders the component", () => {
		render(FileUpload, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it("Renders children snippet", () => {
		render(FileUpload, {
			children: mockSnippet("childrenSnippet"),
		});
		const component = screen.getByTestId(testIds.root);
		expect(component).toHaveTextContent("childrenSnippet");
	});

	it("Renders icon snippet", () => {
		render(FileUpload, {
			iconInterface: mockSnippet("iconInterfaceSnippet"),
		});
		const component = screen.getByTestId(testIds.root);
		expect(component).toHaveTextContent("iconInterfaceSnippet");
	});

	it("should render the component in the disabled state", () => {
		render(FileUpload, { disabled: true });
		const component = screen.getByTestId(testIds.input);
		expect(component).toHaveAttribute("disabled");
	});

	for (const prop of ["base", "classes"]) {
		it(`Correctly applies the \`${prop}\` prop`, () => {
			const value = "bg-green-500";
			render(FileUpload, { [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}
});
