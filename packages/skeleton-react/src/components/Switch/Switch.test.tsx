import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Switch } from "./Switch.js";

describe("<Switch>", () => {
	it("should render the component", () => {
		const { getByTestId } = render(<Switch name="test" />);
		const component = getByTestId("switch");
		expect(component).toBeInTheDocument();
	});

	it("should render the component in the off state", () => {
		const { getByTestId } = render(<Switch name="test" checked={false} />);
		const component = getByTestId("switch-input");
		expect(component).not.toHaveAttribute("checked");
	});

	it("should render the component in the on state", () => {
		const { getByTestId } = render(<Switch name="test" checked={true} />);
		const component = getByTestId("switch-input");
		expect(component).toHaveAttribute("checked");
	});

	it("should render the component with an inactive icon", () => {
		const testIcon = "iconOff";
		const { getByTestId } = render(
			<Switch name="test" checked={false} inactiveChild={testIcon} />,
		);
		const component = getByTestId("switch");
		const elemSpan = component.querySelector("div span");
		expect(elemSpan).toHaveTextContent(testIcon);
	});

	it("should render the component with an active icon", () => {
		const testIcon = "iconActive";
		const { getByTestId } = render(
			<Switch name="test" checked={false} inactiveChild={testIcon} />,
		);
		const component = getByTestId("switch");
		const elemSpan = component.querySelector("div span");
		expect(elemSpan).toHaveTextContent(testIcon);
	});

	it("should render the component in the disabled state", () => {
		const { getByTestId } = render(<Switch name="test" disabled />);
		const component = getByTestId("switch-input");
		expect(component).toHaveAttribute("disabled");
	});

	it("should render the component in the compact mode", () => {
		const { getByTestId } = render(<Switch name="test" compact />);
		const component = getByTestId("switch-control");
		expect(component).toHaveClass("aspect-square");
	});

	it("should render base classes on root", () => {
		const testClass = "bg-green-500";
		const { getByTestId } = render(<Switch name="test" base={testClass} />);
		const component = getByTestId("switch");
		expect(component).toHaveClass(testClass);
	});

	it("should render arbitrary classes on root", () => {
		const testClass = "bg-green-500";
		const { getByTestId } = render(<Switch name="test" classes={testClass} />);
		const component = getByTestId("switch");
		expect(component).toHaveClass(testClass);
	});
});
