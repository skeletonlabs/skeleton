import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { ProgressRing } from './ProgressRing.js';

describe('<ProgressRing>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(<ProgressRing />);
		const component = getByTestId('progress-ring');
		expect(component).toBeInTheDocument();
	});

	it('should render the component with a value and max props', () => {
		const value = 50;
		const max = 100;
		const { getByTestId } = render(<ProgressRing value={value} max={max} />);
		const component = getByTestId('progress-ring');
		expect(component).toBeInTheDocument();
	});

	it('should render the value percentage text', () => {
		const value = 50;
		const max = 100;
		const { getByTestId } = render(<ProgressRing value={value} max={max} />);
		const component = getByTestId('progress-ring-label');
		expect(component).toHaveTextContent(`${value}%`);
	});

	it('should render the component with child content', () => {
		const value = 50;
		const max = 100;
		const childContent = 'TestChild';
		const { getByText } = render(
			<ProgressRing value={value} max={max}>
				{childContent}
			</ProgressRing>
		);
		const text = getByText(childContent);
		expect(text).toBeInTheDocument();
	});

	it('should render in indeterminate mode', () => {
		const { getByTestId } = render(<ProgressRing value={null} />);
		const componentRoot = getByTestId('progress-ring');
		const componentSvg = getByTestId('progress-ring-svg');
		expect(componentRoot.dataset.state).toBe('indeterminate');
		expect(componentSvg).toHaveClass('animate-spin');
	});

	it('should render base classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(<ProgressRing base={testClass} />);
		const component = getByTestId('progress-ring');
		expect(component).toHaveClass(testClass);
	});

	it('should render arbitrary classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(<ProgressRing classes={testClass} />);
		const component = getByTestId('progress-ring');
		expect(component).toHaveClass(testClass);
	});
});
