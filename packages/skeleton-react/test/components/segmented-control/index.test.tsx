import Test from './test.jsx';
import { render,  waitFor } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('SegmentedControl', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('label')).toBeInTheDocument();
			});
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('control')).toBeInTheDocument();
			});
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('indicator')).toBeInTheDocument();
			});
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('item')).toBeInTheDocument();
			});
		});
	});

	describe('ItemText', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('item-text')).toBeInTheDocument();
			});
		});
	});

	describe('ItemHiddenInput', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('item-hidden-input')).toBeInTheDocument();
			});
		});
	});
});
