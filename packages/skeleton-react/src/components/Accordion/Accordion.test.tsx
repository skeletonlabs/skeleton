import { describe, expect, it } from "vitest";
import { act, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion, AccordionContext } from "./Accordion";

const mockProvidervalues = {
  selected: ["testPanel"],
  setSelected: () => {},
  allowMultiple: false,
  setAllowMultiple: () => {},
};

// *************************
// Integration Tests
// *************************

describe("Accordion usage", () => {
  it("should show the panel when the control is clicked", async () => {
    const { queryByText, getByText } = render(
      <Accordion>
        <Accordion.Item>
          <Accordion.Control controls="testControl">
            Test Control 1
          </Accordion.Control>
          <Accordion.Panel id="testControl">Test Panel 1</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Control controls="testControl2">
            Test Control 2
          </Accordion.Control>
          <Accordion.Panel id="testControl2">Test Panel 2</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
    const control1 = getByText("Test Control 1");
    const control2 = getByText("Test Control 2");

    // expect controls to be visible
    expect(control1).toBeInTheDocument();
    expect(control2).toBeInTheDocument();

    // expect panels to be hidden
    expect(queryByText("Test Panel 1")).not.toBeInTheDocument();
    expect(queryByText("Test Panel 2")).not.toBeInTheDocument();

    // click the first control
    await act(async () => {
      await userEvent.click(control1);
    });

    // expect first panel to be visible
    expect(queryByText("Test Panel 1")).toBeInTheDocument();
    // the second panel should still be hidden
    expect(queryByText("Test Panel 2")).not.toBeInTheDocument();

    // click the second control
    await act(async () => {
      await userEvent.click(control2);
    });

    // expect second panel to be visible
    expect(queryByText("Test Panel 2")).toBeInTheDocument();
    // the first panel should be hidden
    expect(queryByText("Test Panel 1")).not.toBeInTheDocument();
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
    const { getByTestId } = render(<Accordion.Item />);
    expect(getByTestId("accordion-item")).toBeInTheDocument();
  });

  it("should allow for children", () => {
    const value = "foobar";
    const { getByTestId } = render(<Accordion.Item>{value}</Accordion.Item>);
    expect(getByTestId("accordion-item").innerHTML).toContain(value);
  });

  it("should allow you to set the `base` style prop", () => {
    const tailwindClasses = "bg-red-500";
    const { getByTestId } = render(<Accordion.Item base={tailwindClasses} />);
    expect(getByTestId("accordion-item")).toHaveClass(tailwindClasses);
  });

  it("should allow you to set the `classes` style prop", () => {
    const tailwindClasses = "bg-green-500";
    const { getByTestId } = render(
      <Accordion.Item classes={tailwindClasses} />
    );
    expect(getByTestId("accordion-item")).toHaveClass(tailwindClasses);
  });
});

// Accordion.Control ---

describe("<Accordion.Control>", () => {
  it("should render the component", () => {
    const { getByTestId } = render(
      <Accordion.Control controls="testControl" />
    );
    expect(getByTestId("accordion-control")).toBeInTheDocument();
  });

  it("should allow for children", () => {
    const value = "foobar";
    const { getByTestId } = render(
      <Accordion.Control controls="testControl">{value}</Accordion.Control>
    );
    expect(getByTestId("accordion-control").innerHTML).toContain(value);
  });

  it("should be set disabled by `disabled` prop", async () => {
    const { getByTestId } = render(
      <Accordion.Control controls="testControl" disabled />
    );
    await waitFor(() => {
      const element = getByTestId("accordion-control");
      expect(element.getAttribute("disabled")).toBe("");
    });
  });

  it("should allow you to set the `base` style prop", () => {
    const tailwindClasses = "bg-red-500";
    const { getByTestId } = render(
      <Accordion.Control controls="testControl" base={tailwindClasses} />
    );
    expect(getByTestId("accordion-control")).toHaveClass(tailwindClasses);
  });

  it("should allow you to set the `classes` style prop", () => {
    const tailwindClasses = "bg-green-500";
    const { getByTestId } = render(
      <Accordion.Control controls="testControl" classes={tailwindClasses} />
    );
    expect(getByTestId("accordion-control")).toHaveClass(tailwindClasses);
  });
});

// Accordion.Panel ---

describe("<Accordion.Panel>", () => {
  it("should render the component", () => {
    const { getByTestId } = render(<Accordion.Panel id="testPanel" />);
    expect(getByTestId("accordion-panel")).toBeInTheDocument();
  });

  it("should set `aria-labeledby` to `id` value", async () => {
    const id = "testPanelId";
    const { getByTestId } = render(<Accordion.Panel id={id} />);
    const element = getByTestId("accordion-panel");
    expect(element.getAttribute("aria-labelledby")).toBe(id);
  });

  it("should allow for children", () => {
    const value = "foobar";
    const { getByTestId } = render(
      <AccordionContext.Provider value={mockProvidervalues}>
        <Accordion.Panel id="testPanel">{value}</Accordion.Panel>
      </AccordionContext.Provider>
    );
    const query = getByTestId("accordion-panel").children[0].innerHTML;
    expect(query).toContain(value);
  });

  it("should allow you to set the `base` style prop", () => {
    const tailwindClasses = "bg-red-500";
    const { getByTestId } = render(
      <AccordionContext.Provider value={mockProvidervalues}>
        <Accordion.Panel id="testPanel" base={tailwindClasses} />
      </AccordionContext.Provider>
    );
    const query = getByTestId("accordion-panel").children[0].classList;
    expect(query).toContain(tailwindClasses);
  });

  it("should allow you to set the `classes` style prop", () => {
    const tailwindClasses = "bg-green-500";
    const { getByTestId } = render(
      <AccordionContext.Provider value={mockProvidervalues}>
        <Accordion.Panel id="testPanel" classes={tailwindClasses} />
      </AccordionContext.Provider>
    );
    const query = getByTestId("accordion-panel").children[0].classList;
    expect(query).toContain(tailwindClasses);
  });
});
