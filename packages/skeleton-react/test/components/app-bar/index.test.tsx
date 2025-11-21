import Test from './test.jsx';
import { render } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

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
