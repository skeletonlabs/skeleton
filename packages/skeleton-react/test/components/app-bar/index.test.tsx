import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('AppBar', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Toolbar', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('toolbar')).toBeInTheDocument();
		});
	});

	describe('Lead', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('lead')).toBeInTheDocument();
		});
	});

	describe('Headline', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('headline')).toBeInTheDocument();
		});
	});

	describe('Trail', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('trail')).toBeInTheDocument();
		});
	});
});
