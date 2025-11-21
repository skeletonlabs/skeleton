import Test from './test.jsx';
import { render } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('Switch', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Thumb', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});
});
