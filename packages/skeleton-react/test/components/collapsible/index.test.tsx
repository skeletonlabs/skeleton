import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Collapsible', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('content')).toBeInTheDocument();
		});
	});
});
