import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render, waitFor } from 'vitest-browser-react';

describe('SegmentedControl', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			await waitFor(() => {
				expect(getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			await waitFor(() => {
				expect(getByTestId('label')).toBeInTheDocument();
			});
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			await waitFor(() => {
				expect(getByTestId('control')).toBeInTheDocument();
			});
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			await waitFor(() => {
				expect(getByTestId('indicator')).toBeInTheDocument();
			});
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			await waitFor(() => {
				expect(getByTestId('item')).toBeInTheDocument();
			});
		});
	});

	describe('ItemText', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			await waitFor(() => {
				expect(getByTestId('item-text')).toBeInTheDocument();
			});
		});
	});

	describe('ItemHiddenInput', () => {
		it('renders', async () => {
			const { getByTestId } = await render(<Test />);
			await waitFor(() => {
				expect(getByTestId('item-hidden-input')).toBeInTheDocument();
			});
		});
	});
});
