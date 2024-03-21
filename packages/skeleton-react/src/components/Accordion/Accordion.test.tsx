import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Accordion } from "./Accordion";

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
  it("should render the component", () => {
    const component = render(<Accordion.Panel id="testPanel" />);
    expect(component).toBeTruthy();
  });

  // TODO: the following tests depend on useContext()

  // it("should allow for children", () => {
  //   const value = "foobar";
  //   const { getByTestId } = render(
  //     <Accordion.Panel id="testPanel">{value}</Accordion.Panel>
  //   );
  //   expect(getByTestId("accordion-panel").innerHTML).toContain(value);
  // });

  //   it("should allow you to set the `base` style prop", () => {
  //     const tailwindClasses = "bg-red-500";
  //     const { getByTestId } = render(
  //       <Accordion.Panel id="testPanel" base={tailwindClasses} />
  //     );
  //     expect(getByTestId("accordion-panel").classList).toContain(tailwindClasses);
  //   });

  //   it("should allow you to set the `classes` style prop", () => {
  //     const tailwindClasses = "bg-green-500";
  //     const { getByTestId } = render(
  //       <Accordion.Panel id="testPanel" classes={tailwindClasses} />
  //     );
  //     expect(getByTestId("accordion-panel").classList).toContain(tailwindClasses);
  //   });
});
