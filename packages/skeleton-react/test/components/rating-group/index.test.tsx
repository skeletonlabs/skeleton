import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('RatingGroup', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Items', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
