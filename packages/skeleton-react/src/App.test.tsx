import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import App from "./App.js";

describe("App", () => {
	it("renders the component", () => {
		const { getByTestId } = render(<App />);
		expect(getByTestId("app")).toBeInTheDocument();
	});
});
