import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FileUpload } from "./FileUpload.js";

describe("<FileUpload>", () => {
	it("should render the component", () => {
		const { getByTestId } = render(<FileUpload name="test" />);
		const component = getByTestId("uploader");
		expect(component).toBeInTheDocument();
	});

	it("should render the component with an interface icon", () => {
		const testIcon = "testIcon";
		const { getByTestId } = render(
			<FileUpload name="test" iconInterface={testIcon} />,
		);
		const elemInterfaceIcon = getByTestId("uploader-interface-icon");
		expect(elemInterfaceIcon).toHaveTextContent(testIcon);
	});

	it("should render the component with a custom interface", () => {
		const customInterface = "foobar";
		const { getByTestId } = render(
			<FileUpload name="test">{customInterface}</FileUpload>,
		);
		const component = getByTestId("uploader");
		expect(component).toHaveTextContent(customInterface);
	});

	it("should render the component in the disabled state", () => {
		const { getByTestId } = render(<FileUpload name="test" disabled />);
		const elemInput = getByTestId("uploader-input");
		expect(elemInput).toHaveAttribute("disabled");
	});

	it("should render base classes on root", () => {
		const testClass = "bg-green-500";
		const { getByTestId } = render(<FileUpload name="test" base={testClass} />);
		const component = getByTestId("uploader");
		expect(component).toHaveClass(testClass);
	});

	it("should render arbitrary classes on root", () => {
		const testClass = "bg-green-500";
		const { getByTestId } = render(
			<FileUpload name="test" classes={testClass} />,
		);
		const component = getByTestId("uploader");
		expect(component).toHaveClass(testClass);
	});
});
