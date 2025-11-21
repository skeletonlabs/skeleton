import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render, waitFor } from 'vitest-browser-react';

describe('Tabs', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe('List', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('list')).toBeInTheDocument();
			});
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('trigger')).toBeInTheDocument();
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

	describe('Content', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('content')).toBeInTheDocument();
			});
		});
	});
});
