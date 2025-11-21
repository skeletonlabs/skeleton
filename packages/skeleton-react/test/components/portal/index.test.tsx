import Test from './test.jsx';
import { render } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('Portal', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('child')).toBeInTheDocument();
		});

		it('renders in the target', () => {
			const { getByTestId } = render(<Test target={document.body} />);
			expect(getByTestId('child').parentElement).toBe(document.body);
		});

		it('renders in the parent when disabled', () => {
			const { getByTestId } = render(<Test disabled />);
			expect(getByTestId('child').parentElement).toBe(getByTestId('parent'));
		});
	});
});
