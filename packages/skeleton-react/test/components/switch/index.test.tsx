import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Switch', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Thumb', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});
});
