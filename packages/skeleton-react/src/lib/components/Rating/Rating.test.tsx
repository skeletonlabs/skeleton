import { act, render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Rating } from "./Rating";
import { Star } from "lucide-react";
import userEvent from "@testing-library/user-event";

// *************************
// Integration Tests
// *************************

describe("static Rating", () => {
    const ratingComponent = (value: number, max: number) => (
        <Rating value={value} max={max}>
            <Rating.IconEmpty>
                <Star size={24} />
            </Rating.IconEmpty>
            <Rating.IconFull>
                <Star size={24} fill="white" />
            </Rating.IconFull>
        </Rating>
    )

    it("should render with the value initial value set", () => {
        const { getAllByTestId } = render(ratingComponent(2.5, 5));

        const emptyIcons = getAllByTestId("rating-iconempty");
        const fullIcons = getAllByTestId("rating-iconfull");
        expect(emptyIcons).toHaveLength(5);
        expect(fullIcons).toHaveLength(5);

        // css variable representing the clip value.
        expect(getClipValue(emptyIcons[0])).toBe(250);

        function getClipValue(span: HTMLElement) {
            return parseFloat(getComputedStyle(span).getPropertyValue("--clip_value").trim());
        }
    });

    it("should not render any icons with max set to 0", () => {
        const { getByTestId } = render(ratingComponent(2.5, 0));

        const component = getByTestId("rating");
        expect(component).toBeEmptyDOMElement();
    });

    it("should render a large number of ratings", () => {
        const { getByTestId } = render(ratingComponent(2.5, 100));

        const component = getByTestId("rating");
        const buttons = component.querySelectorAll("button");
        expect(buttons).toHaveLength(100);
    });

    it("should not be interactive in static mode", () => {
        const { getByTestId } = render(ratingComponent(2.5, 0));

        const component = getByTestId("rating");
        const buttons = component.querySelectorAll("button");

        buttons.forEach(button => {
            expect(button.tabIndex).toBe(-1);
            expect(button).toHaveClass("pointer-events-none");
        });
    });
});

describe("Interactive Rating", () => {
    // getBoundingClientRect always returns 0 in @testing-library, so we have to mock it
    beforeEach(() => {
        Object.defineProperty(Element.prototype, 'getBoundingClientRect', {
          value: () => ({
            width: 100,
            height: 100,
            top: 0,
            left: 0,
            right: 100,
            bottom: 100,
            x: 0,
            y: 0,
          }),
        });
      });

    const onValueChange = vi.fn();
    const ratingComponent = (value: number, fraction: number) => (
        <Rating value={value} onValueChange={(val) => onValueChange(val)} fraction={fraction} max={5} interactive>
            <Rating.IconEmpty>
                <Star size={24} />
            </Rating.IconEmpty>
            <Rating.IconFull>
                <Star size={24} fill="white" />
            </Rating.IconFull>
        </Rating>
    );

    it("should click a rating and change the value successfully", async () => {
        const { getByTestId } = render(ratingComponent(2.5, 1));

        const component = getByTestId("rating");
        const buttons = component.querySelectorAll("button");

        // click the last star
        await userEvent.click(buttons[buttons.length - 1]);
        expect(onValueChange).toHaveBeenCalledWith(5);

        // click the first star
        await userEvent.click(buttons[0]);
        expect(onValueChange).toHaveBeenCalledWith(1);
    });
});

// *************************
// Unit Tests
// *************************

// Rating ---

describe("<Rating>", () => {
    it("should render the component", () => {
        const { getByTestId } = render(<Rating />);
        expect(getByTestId("rating")).toBeInTheDocument();
    });

    it("should allow for children", () => {
        const value = "children value";
        const { getByTestId } = render(<Rating>{value}</Rating>);
        expect(getByTestId("rating").innerHTML).toContain(value);
    });

    it("should allow to set the `base` style prop", () => {
        const tailwindClasses = "bg-red-600";
        const { getByTestId } = render(<Rating base={tailwindClasses} />);
        expect(getByTestId("rating")).toHaveClass(tailwindClasses);
    });

    it("should allow you to set the `classes` style prop", () => {
        const tailwindClasses = "bg-green-600";
        const { getByTestId } = render(<Rating classes={tailwindClasses} />);
        expect(getByTestId("rating")).toHaveClass(tailwindClasses);
    });
});

// IconEmpty ---

describe("<Rating.IconEmpty>", () => {
    it("should render the component", () => {
        const { getByTestId } = render(<Rating.IconEmpty />);
        expect(getByTestId("rating-iconempty")).toBeInTheDocument();
    });

    it("should allow for children", () => {
        const value = "children value";
        const { getByTestId } = render(<Rating.IconEmpty>{value}</Rating.IconEmpty>);
        expect(getByTestId("rating-iconempty").innerHTML).toContain(value);
    });

    it("should allow to set the `base` style prop", () => {
        const tailwindClasses = "bg-red-600";
        const { getByTestId } = render(<Rating.IconEmpty base={tailwindClasses} />);
        expect(getByTestId("rating-iconempty")).toHaveClass(tailwindClasses);
    });

    it("should allow you to set the `classes` style prop", () => {
        const tailwindClasses = "bg-green-600";
        const { getByTestId } = render(<Rating.IconEmpty classes={tailwindClasses} />);
        expect(getByTestId("rating-iconempty")).toHaveClass(tailwindClasses);
    });
});

// IconFull ---

describe("<Rating.IconFull>", () => {
    it("should render the component", () => {
        const { getByTestId } = render(<Rating.IconFull />);
        expect(getByTestId("rating-iconfull")).toBeInTheDocument();
    });

    it("should allow for children", () => {
        const value = "children value";
        const { getByTestId } = render(<Rating.IconFull>{value}</Rating.IconFull>);
        expect(getByTestId("rating-iconfull").innerHTML).toContain(value);
    });

    it("should allow to set the `base` style prop", () => {
        const tailwindClasses = "bg-red-600";
        const { getByTestId } = render(<Rating.IconFull base={tailwindClasses} />);
        expect(getByTestId("rating-iconfull")).toHaveClass(tailwindClasses);
    });

    it("should allow you to set the `classes` style prop", () => {
        const tailwindClasses = "bg-green-600";
        const { getByTestId } = render(<Rating.IconFull classes={tailwindClasses} />);
        expect(getByTestId("rating-iconfull")).toHaveClass(tailwindClasses);
    });
});