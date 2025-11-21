import Test from './test.jsx';
import { render } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('ToggleGroup', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});
});
