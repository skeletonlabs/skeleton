import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TagsInput } from "./TagsInput.js";

const flavors = ["Vanilla", "Chocolate", "Strawberry"];

describe("<Switch>", () => {
	it("should render the component", () => {
		const { getByTestId } = render(<TagsInput value={flavors} />);
		const component = getByTestId("tags");
		expect(component).toBeInTheDocument();
	});

	it("should render the component with an custom delete icon", () => {
		const testIcon = "testIconDelete";
		const { getAllByTestId } = render(
			<TagsInput value={flavors} buttonDelete={testIcon} />,
		);
		const elementButtons = getAllByTestId("tag-delete");
		expect(elementButtons[0]).toHaveTextContent(testIcon);
	});

	it("should render the component in the disabled state", () => {
		const { getByTestId } = render(<TagsInput value={flavors} disabled />);
		const elemInputAdd = getByTestId("tags-input-add");
		expect(elemInputAdd).toHaveAttribute("disabled");
	});

	it("should render base classes on root", () => {
		const testClass = "bg-green-500";
		const { getByTestId } = render(<TagsInput base={testClass} />);
		const component = getByTestId("tags");
		expect(component).toHaveClass(testClass);
	});

	it("should render arbitrary classes on root", () => {
		const testClass = "bg-green-500";
		const { getByTestId } = render(<TagsInput classes={testClass} />);
		const component = getByTestId("tags");
		expect(component).toHaveClass(testClass);
	});
});
