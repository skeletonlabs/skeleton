import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("renders the component", () => {
    const component = render(<Accordion />);
    expect(component).toBeTruthy();
  });
});
