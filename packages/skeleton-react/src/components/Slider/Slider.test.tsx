import { vi, beforeAll, describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Slider } from './Slider.js';

describe('<Slider>', () => {
	beforeAll(() => {
		global.ResizeObserver = vi.fn().mockImplementation(() => ({
			observe: vi.fn(),
			unobserve: vi.fn(),
			disconnect: vi.fn()
		}));
	});

	it('should render the component with a single value', () => {
		const { getByTestId } = render(<Slider name="test" value={[50]} />);
		const component = getByTestId('slider');
		expect(component).toBeInTheDocument();
	});

	it('should render the component with multiple values', () => {
		const { getByTestId } = render(<Slider name="test" value={[40, 60]} />);
		const component = getByTestId('slider');
		expect(component).toBeInTheDocument();
	});

	it('should render the component with markers', () => {
		const { getByTestId, getAllByTestId } = render(<Slider name="test" value={[50]} markers={[25, 50, 75]} />);
		const elemMakers = getByTestId('slider-markers');
		const elemMarks = getAllByTestId('slider-mark');
		expect(elemMakers).toBeInTheDocument();
		expect(elemMarks).toHaveLength(3);
	});

	it('should render the component in the disabled state', () => {
		const { getByTestId } = render(<Slider name="test" value={[50]} disabled />);
		const component = getByTestId('slider');
		expect(component).toHaveClass('disabled');
	});

	it('should render the component in the read-only state', () => {
		const { getByTestId } = render(<Slider name="test" value={[50]} readOnly />);
		const component = getByTestId('slider-thumb');
		expect(component).toHaveClass('cursor-not-allowed');
	});

	it('should render base classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(<Slider name="test" base={testClass} />);
		const component = getByTestId('slider');
		expect(component).toHaveClass(testClass);
	});

	it('should render arbitrary classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(<Slider name="test" classes={testClass} />);
		const component = getByTestId('slider');
		expect(component).toHaveClass(testClass);
	});
});
