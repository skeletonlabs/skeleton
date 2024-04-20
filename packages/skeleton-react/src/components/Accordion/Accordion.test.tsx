import { describe, expect, it } from "vitest";
import { act, render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion } from "./Accordion";

// *************************
// Integration Tests
// *************************

describe("Accordion usage", () => {
	it("should show the panel when the control is clicked", async () => {
		const { queryByText, getByText } = render(
			<Accordion value={["testItem1"]}>
				<Accordion.Item id="testItem1">
					<Accordion.Control>Test Control 1</Accordion.Control>
					<Accordion.Panel>Test Panel 1</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item id="testItem2">
					<Accordion.Control>Test Control 2</Accordion.Control>
					<Accordion.Panel>Test Panel 2</Accordion.Panel>
				</Accordion.Item>
			</Accordion>,
		);

		const control1 = getByText("Test Control 1");
		const control2 = getByText("Test Control 2");
		const panel1 = queryByText("Test Panel 1");
		const panel2 = queryByText("Test Panel 2");

		// Expect both controls to be visible
		expect(control1).toBeInTheDocument();
		expect(control2).toBeInTheDocument();

		// Expect panels to be hidden
		expect(panel1).toBeInTheDocument();
		expect(panel2).not.toBeInTheDocument();

		// Click the first control
		await act(async () => {
			await userEvent.click(control1);
		});

		waitForElementToBeRemoved(panel1).then(() => {
			// Expect first panel to be hidden
			// Expect second panel to be hidden
			expect(panel1).not.toBeInTheDocument();
			expect(panel2).not.toBeInTheDocument();
		});

		// Click the second control
		await act(() => userEvent.click(control2));

		await waitFor(() => {
			const panel1 = queryByText("Test Panel 1");
			const panel2 = queryByText("Test Panel 2");
			expect(panel1).not.toBeInTheDocument();
			expect(panel2).toBeInTheDocument();
		});
	});
});

// *************************
// Unit Tests
// *************************

// Accordion ---

describe("<Accordion>", () => {
	it("should render the component", () => {
		const { getByTestId } = render(<Accordion />);
		expect(getByTestId("accordion")).toBeInTheDocument();
	});

	it("should render with `multiple` prop enabled", () => {
		const { getByTestId } = render(<Accordion multiple />);
		expect(getByTestId("accordion")).toBeInTheDocument();
	});

	it("should allow for children", () => {
		const value = "foobar";
		const { getByTestId } = render(<Accordion>{value}</Accordion>);
		expect(getByTestId("accordion").innerHTML).toContain(value);
	});

	it("should allow you to set the `base` style prop", () => {
		const tailwindClasses = "bg-red-500";
		const { getByTestId } = render(<Accordion base={tailwindClasses} />);
		expect(getByTestId("accordion")).toHaveClass(tailwindClasses);
	});

	it("should allow you to set the `classes` style prop", () => {
		const tailwindClasses = "bg-green-500";
		const { getByTestId } = render(<Accordion classes={tailwindClasses} />);
		expect(getByTestId("accordion")).toHaveClass(tailwindClasses);
	});
});

// Accordion.Item ---

describe("<Accordion.Item>", () => {
	it("should render the component", () => {
		const { getByTestId } = render(<Accordion.Item id="testItem1" />);
		expect(getByTestId("accordion-item")).toBeInTheDocument();
	});

	it("should allow for children", () => {
		const value = "foobar";
		const { getByTestId } = render(<Accordion.Item id="testItem1">{value}</Accordion.Item>);
		expect(getByTestId("accordion-item").innerHTML).toContain(value);
	});

	it("should allow you to set the `base` style prop", () => {
		const tailwindClasses = "bg-red-500";
		const { getByTestId } = render(<Accordion.Item id="testItem1" base={tailwindClasses} />);
		expect(getByTestId("accordion-item")).toHaveClass(tailwindClasses);
	});

	it("should allow you to set the `classes` style prop", () => {
		const tailwindClasses = "bg-green-500";
		const { getByTestId } = render(<Accordion.Item id="testItem1" classes={tailwindClasses} />);
		expect(getByTestId("accordion-item")).toHaveClass(tailwindClasses);
	});
});

// Accordion.Control ---

describe("<Accordion.Control>", () => {
	it("should render the component", () => {
		const { getByTestId } = render(<Accordion.Control />);
		expect(getByTestId("accordion-control")).toBeInTheDocument();
	});

	it("should allow for children", () => {
		const value = "foobar";
		const { getByTestId } = render(<Accordion.Control>{value}</Accordion.Control>);
		expect(getByTestId("accordion-control").innerHTML).toContain(value);
	});

	it("should be set disabled by `disabled` prop", async () => {
		const { getByTestId } = render(<Accordion.Control disabled />);
		await waitFor(() => {
			const element = getByTestId("accordion-control");
			expect(element.getAttribute("disabled")).toBe("");
		});
	});

	it("should allow you to set the `base` style prop", () => {
		const tailwindClasses = "bg-red-500";
		const { getByTestId } = render(<Accordion.Control base={tailwindClasses} />);
		expect(getByTestId("accordion-control")).toHaveClass(tailwindClasses);
	});

	it("should allow you to set the `classes` style prop", () => {
		const tailwindClasses = "bg-green-500";
		const { getByTestId } = render(<Accordion.Control classes={tailwindClasses} />);
		expect(getByTestId("accordion-control")).toHaveClass(tailwindClasses);
	});
});

// Accordion.Panel ---

describe("<Accordion.Panel>", () => {
	it("should render the component", () => {
		const { getByTestId } = render(<Accordion.Panel />);
		expect(getByTestId("accordion-panel")).toBeInTheDocument();
	});

	it("should set `aria-labeledby` to `id` value", async () => {
		const id = "testPanelId";
		const { getByTestId } = render(
			<Accordion.Item id={id}>
				<Accordion.Panel>Test Panel 1</Accordion.Panel>
			</Accordion.Item>,
		);
		const element = getByTestId("accordion-panel");
		expect(element.getAttribute("aria-labelledby")).toBe(id);
	});

	it("should allow for children", () => {
		const value = "foobar";
		const { getByTestId } = render(
			<Accordion value={["testItem1"]}>
				<Accordion.Item id="testItem1">
					<Accordion.Panel>{value}</Accordion.Panel>
				</Accordion.Item>
			</Accordion>,
		);
		const element = getByTestId("accordion-panel").children[0].innerHTML;
		expect(element).toContain(value);
	});

	it("should allow you to set the `base` style prop", () => {
		const tailwindClasses = "bg-red-500";
		const { getByTestId } = render(
			<Accordion value={["testItem1"]}>
				<Accordion.Item id="testItem1">
					<Accordion.Panel base={tailwindClasses}>Test</Accordion.Panel>
				</Accordion.Item>
			</Accordion>,
		);
		const element = getByTestId("accordion-panel-children");
		expect(element).toHaveClass(tailwindClasses);
	});

	it("should allow you to set the `classes` style prop", () => {
		const tailwindClasses = "bg-green-500";
		const { getByTestId } = render(
			<Accordion value={["testItem1"]}>
				<Accordion.Item id="testItem1">
					<Accordion.Panel classes={tailwindClasses}>Test</Accordion.Panel>
				</Accordion.Item>
			</Accordion>,
		);
		const element = getByTestId("accordion-panel-children");
		expect(element).toHaveClass(tailwindClasses);
	});
});
