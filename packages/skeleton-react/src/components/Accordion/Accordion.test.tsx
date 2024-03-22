import { describe, expect, it } from "vitest";
import { render, waitFor } from "@testing-library/react";

import { Accordion, AccordionContext } from "./Accordion";
import { beforeEach } from "node:test";

// Accordion ---

describe("<Accordion>", () => {
  it("should render the component", () => {
    const component = render(<Accordion />);
    expect(component).toBeTruthy();
  });

  it("should render with `multiple` prop enabled", () => {
    const component = render(<Accordion multiple />);
    expect(component).toBeTruthy();
  });

  it("should allow for children", () => {
    const value = "foobar";
    const { getByTestId } = render(<Accordion>{value}</Accordion>);
    expect(getByTestId("accordion").innerHTML).toContain(value);
  });

  it("should allow you to set the `base` style prop", () => {
    const tailwindClasses = "bg-red-500";
    const { getByTestId } = render(<Accordion base={tailwindClasses} />);
    expect(getByTestId("accordion").classList).toContain(tailwindClasses);
  });

  it("should allow you to set the `classes` style prop", () => {
    const tailwindClasses = "bg-green-500";
    const { getByTestId } = render(<Accordion classes={tailwindClasses} />);
    expect(getByTestId("accordion").classList).toContain(tailwindClasses);
  });
});

// Accordion.Item ---

describe("<Accordion.Item>", () => {
  it("should render the component", () => {
    const component = render(<Accordion.Item />);
    expect(component).toBeTruthy();
  });

  it("should allow for children", () => {
    const value = "foobar";
    const { getByTestId } = render(<Accordion.Item>{value}</Accordion.Item>);
    expect(getByTestId("accordion-item").innerHTML).toContain(value);
  });

  it("should allow you to set the `base` style prop", () => {
    const tailwindClasses = "bg-red-500";
    const { getByTestId } = render(<Accordion.Item base={tailwindClasses} />);
    expect(getByTestId("accordion-item").classList).toContain(tailwindClasses);
  });

  it("should allow you to set the `classes` style prop", () => {
    const tailwindClasses = "bg-green-500";
    const { getByTestId } = render(
      <Accordion.Item classes={tailwindClasses} />
    );
    expect(getByTestId("accordion-item").classList).toContain(tailwindClasses);
  });
});

// Accordion.Control ---

describe("<Accordion.Control>", () => {
  it("should render the component", () => {
    const component = render(<Accordion.Control controls="testControl" />);
    expect(component).toBeTruthy();
  });

  it("should allow for children", () => {
    const value = "foobar";
    const { getByTestId } = render(
      <Accordion.Control controls="testControl">{value}</Accordion.Control>
    );
    expect(getByTestId("accordion-control").innerHTML).toContain(value);
  });

  // FIXME: fails because Context state is not refleted in DOM
  // it("aria-expaned should be `true` when `open` prop `true`", async () => {
  //   const { getByTestId } = render(
  //     <Accordion.Control controls="testControl" open />
  //   );
  //   await waitFor(() => {
  //     const element = getByTestId("accordion-control");
  //     expect(element.getAttribute("aria-expanded")).toBe("true");
  //   });
  // });

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
    expect(getByTestId("accordion-control").classList).toContain(
      tailwindClasses
    );
  });

  it("should allow you to set the `classes` style prop", () => {
    const tailwindClasses = "bg-green-500";
    const { getByTestId } = render(
      <Accordion.Control controls="testControl" classes={tailwindClasses} />
    );
    expect(getByTestId("accordion-control").classList).toContain(
      tailwindClasses
    );
  });
});

// Accordion.Panel ---

describe("<Accordion.Panel>", () => {
  const mockProvidervalues = {
    selected: ["testPanel"],
    setSelected: () => {},
    allowMultiple: false,
    setAllowMultiple: () => {},
  };

  beforeEach(() => {});

  it("should render the component", () => {
    const component = render(<Accordion.Panel id="testPanel" />);
    expect(component).toBeTruthy();
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
