import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { ProgressRing } from './ProgressRing.js';

describe('<ProgressRing>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(<ProgressRing />);
		const component = getByTestId('progress-ring');
		expect(component).toBeInTheDocument();
	});

	it('should render the component with a value and max', () => {
		const value = 50;
		const max = 100;
		const { getByTestId } = render(<ProgressRing value={value} max={max} />);
		const component = getByTestId('progress-ring');
		expect(component).toBeInTheDocument();
	});

	it('should render the component with a default child', () => {
		const value = 50;
		const max = 100;
		const defaultChildText = 'TestChild';
		const { getByText } = render(
			<ProgressRing value={value} max={max}>
				{defaultChildText}
			</ProgressRing>
		);
		const text = getByText(defaultChildText);
		expect(text).toBeInTheDocument();
	});
});
