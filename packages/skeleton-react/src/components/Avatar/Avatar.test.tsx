import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "../../index.js";

describe("Avatar", () => {
	describe("<Avatar>", () => {
		const testId = "avatar";

		it("Renders the component", () => {
			const component = render(<Avatar name="name" />);
			expect(component.getByTestId(testId)).toBeInTheDocument();
		});

		it("Renders the children", () => {
			const component = render(
				<Avatar name="name">
					<div data-testid="child" />
				</Avatar>,
			);
			expect(component.getByTestId("child")).toBeInTheDocument();
		});

		for (const prop of [
			"base",
			"background",
			"size",
			"font",
			"border",
			"rounded",
			"shadow",
			"classes",
		]) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = "foo";
				const component = render(<Avatar name="name" {...{ [prop]: value }} />);
				expect(component.getByTestId(testId)).toHaveClass(value);
			});
		}

		describe("Image", () => {
			const testId = "avatar-image";

			it("Renders the component", () => {
				const component = render(<Avatar name="name" src="src" />);
				expect(component.getByTestId(testId)).toBeInTheDocument();
			});

			for (const prop of ["imageBase", "imageClasses"]) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = "foo";
					const component = render(
						<Avatar name="name" src="src" {...{ [prop]: value }} />,
					);
					expect(component.getByTestId(testId)).toHaveClass(value);
				});
			}

			it("Correctly applies the `style` prop", () => {
				const value = { backgroundColor: "rgb(0, 128, 0)", opacity: 0.5 };
				const component = render(
					<Avatar name="name" src="src" style={value} />,
				);
				expect(component.getByTestId(testId)).toHaveStyle(
					"background-color: rgb(0, 128, 0); opacity: 0.5;",
				);
			});
		});

		describe("Fallback", () => {
			const testId = "avatar-fallback";
			it("Renders the component", () => {
				const component = render(<Avatar name="name" />);
				expect(component.getByTestId(testId)).toBeInTheDocument();
			});

			it("Renders the children", () => {
				const component = render(
					<Avatar name="name">
						<div data-testid="child" />
					</Avatar>,
				);
				expect(component.getByTestId("child")).toBeInTheDocument();
			});

			it("Renders initials of `name` prop if no children provided", () => {
				const component = render(<Avatar name="name" />);
				expect(component.getByTestId(testId)).toHaveTextContent("n");
			});
		});
	});
});
