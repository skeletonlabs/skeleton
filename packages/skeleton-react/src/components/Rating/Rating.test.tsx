import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Rating } from "./Rating.js";

describe("<Rating>", () => {
	it("should render the component", () => {
		const { getByTestId } = render(<Rating />);
		const component = getByTestId("rating");
		expect(component).toBeInTheDocument();
	});

	it("should render with a value", () => {
		const testValue = 14;
		const { getByTestId } = render(<Rating value={testValue} />);
		const input = getByTestId("rating-input");
		expect(input.getAttribute("value")).eq(`${testValue}`);
	});

	it("should render with custom iconEmpty", () => {
		const testIconEmpty = "testIconEmpty";
		const { getAllByTestId } = render(
			<Rating value={0} iconEmpty={testIconEmpty} />,
		);
		const elementIcons = getAllByTestId("rating-item");
		expect(elementIcons[0]).toHaveTextContent(testIconEmpty);
	});

	it("should render with custom iconHalf", () => {
		const testIconHalf = "testIconHalf";
		const { getAllByTestId } = render(
			<Rating value={0.5} iconHalf={testIconHalf} allowHalf />,
		);
		const elementIcons = getAllByTestId("rating-item");
		expect(elementIcons[0]).toHaveTextContent(testIconHalf);
	});

	it("should render with custom iconFull", () => {
		const testIconFull = "testIconFull";
		const { getAllByTestId } = render(
			<Rating value={1} iconFull={testIconFull} />,
		);
		const elementIcons = getAllByTestId("rating-item");
		expect(elementIcons[0]).toHaveTextContent(testIconFull);
	});

	it("should render base classes on root", () => {
		const testClass = "bg-green-500";
		const { getByTestId } = render(<Rating base={testClass} />);
		const component = getByTestId("rating");
		expect(component).toHaveClass(testClass);
	});

	it("should render arbitrary classes on root", () => {
		const testClass = "bg-green-500";
		const { getByTestId } = render(<Rating classes={testClass} />);
		const component = getByTestId("rating");
		expect(component).toHaveClass(testClass);
	});
});
