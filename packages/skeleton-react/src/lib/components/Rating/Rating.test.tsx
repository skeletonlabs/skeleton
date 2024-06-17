import { render, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Rating } from './Rating';
import { Star } from 'lucide-react';
import userEvent from '@testing-library/user-event';

// *************************
// Integration Tests
// *************************

describe('static Rating', () => {
	const ratingComponent = (value: number, max: number) => (
		<Rating value={value} max={max} iconEmpty={<Star size={24} />} iconFull={<Star size={24} className="fill-surface-950-50" />} />
	);

	it('should render with the value initial value set', () => {
		const { getAllByTestId } = render(ratingComponent(2.5, 5));

		const emptyIcons = getAllByTestId('rating-iconempty');
		const fullIcons = getAllByTestId('rating-iconfull');
		expect(emptyIcons).toHaveLength(5);
		expect(fullIcons).toHaveLength(5);

		// css variable representing the clip value.
		expect(getClipValue(emptyIcons[0])).toBe(250);

		function getClipValue(span: HTMLElement) {
			return parseFloat(getComputedStyle(span).getPropertyValue('--clipValue').trim());
		}
	});

	it('should not render any icons with max set to 0', () => {
		const { getByTestId } = render(ratingComponent(2.5, 0));

		const component = getByTestId('rating');
		expect(component).toBeEmptyDOMElement();
	});

	it('should render a large number of ratings', () => {
		const { getByTestId } = render(ratingComponent(2.5, 100));

		const component = getByTestId('rating');
		const buttons = component.querySelectorAll('button');
		expect(buttons).toHaveLength(100);
	});

	it('should not be interactive in static mode', () => {
		const { getByTestId } = render(ratingComponent(2.5, 0));

		const component = getByTestId('rating');
		const buttons = component.querySelectorAll('button');

		buttons.forEach((button) => {
			expect(button.tabIndex).toBe(-1);
			expect(button).toHaveClass('pointer-events-none');
		});
	});
});

describe('Interactive Rating', () => {
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
				y: 0
			})
		});
	});

	const onValueChange = vi.fn();
	const ratingComponent = (value: number, step: number) => (
		<Rating
			value={value}
			onValueChange={(val) => onValueChange(val)}
			step={step}
			max={5}
			interactive
			iconEmpty={<Star size={24} />}
			iconFull={<Star size={24} className="fill-surface-950-50" />}
		/>
	);

	it('should click a rating and change the value successfully', async () => {
		const { getByTestId } = render(ratingComponent(2.5, 1));

		const component = getByTestId('rating');
		const buttons = component.querySelectorAll('button');

		// click the last star
		await userEvent.click(buttons[buttons.length - 1]);
		expect(onValueChange).toHaveBeenCalledWith(5);

		// click the first star
		await userEvent.click(buttons[0]);
		expect(onValueChange).toHaveBeenCalledWith(1);
	});

	it('should click the Steps and change the value successfully', async () => {
		const { getByTestId } = render(ratingComponent(2.5, 2));

		const component = getByTestId('rating');
		const buttons = component.querySelectorAll('button');

		// click the first half of the second star
		await userEvent.click(buttons[1]);
		expect(onValueChange).toHaveBeenCalledWith(1.5);

		// click the second half of the second star
		fireEvent.mouseDown(buttons[1], { clientX: 50 });
		fireEvent.mouseUp(buttons[1], { clientX: 50 });
		expect(onValueChange).toHaveBeenCalledWith(2);
	});

	it('should focus on active rating element on focus', async () => {
		const { getByTestId } = render(ratingComponent(2, 1));

		const component = getByTestId('rating');

		// focus on rating
		component.focus();
		await userEvent.keyboard('{Tab}');

		const buttons = component.querySelectorAll('button');
		expect(buttons[1]).toHaveFocus();
	});

	it('should increase and decrease rating using keyboard arrows', async () => {
		const { getByTestId } = render(ratingComponent(2, 1));

		const component = getByTestId('rating');

		// focus on rating
		component.focus();
		await userEvent.keyboard('{Tab}');

		const buttons = component.querySelectorAll('button');
		expect(buttons[1]).toHaveFocus();

		// increase rating
		await userEvent.keyboard('{ArrowRight}');
		expect(buttons[2]).toHaveFocus();
		expect(onValueChange).toHaveBeenCalledWith(3);

		// decrease rating
		await userEvent.keyboard('{ArrowLeft}');
		expect(buttons[1]).toHaveFocus();
		expect(onValueChange).toHaveBeenCalledWith(2);
	});

	it('should not increase or decrease value over the limit', async () => {
		const { getByTestId } = render(ratingComponent(2, 1));

		const component = getByTestId('rating');

		// focus on rating
		component.focus();
		await userEvent.keyboard('{Tab}');

		const buttons = component.querySelectorAll('button');
		expect(buttons[1]).toHaveFocus();

		// increase rating
		await userEvent.keyboard('{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}');
		expect(buttons[4]).toHaveFocus();
		expect(onValueChange).toHaveBeenCalledWith(5);

		// decrease rating
		await userEvent.keyboard('{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}');
		expect(buttons[0]).toHaveFocus();
		expect(onValueChange).toHaveBeenCalledWith(0);
	});
});

// *************************
// Unit Tests
// *************************

// Rating ---

describe('<Rating>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(<Rating />);
		expect(getByTestId('rating')).toBeInTheDocument();
	});

	it('should allow to set the `base` style prop', () => {
		const tailwindClasses = 'bg-red-600';
		const { getByTestId } = render(<Rating base={tailwindClasses} />);
		expect(getByTestId('rating')).toHaveClass(tailwindClasses);
	});

	it('should allow you to set the `classes` style prop', () => {
		const tailwindClasses = 'bg-green-600';
		const { getByTestId } = render(<Rating classes={tailwindClasses} />);
		expect(getByTestId('rating')).toHaveClass(tailwindClasses);
	});
});
