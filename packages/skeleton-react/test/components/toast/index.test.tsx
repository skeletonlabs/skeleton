import Test from './test.jsx';
import { render, waitFor } from 'vitest-browser-react';
import { describe, expect, it } from 'vitest';

describe('Toast', () => {
	describe('Group', () => {
		it('renders', () => {
			const { getByTestId } = render(<Test />);
			expect(getByTestId('group')).toBeInTheDocument();
		});
	});

	describe.skip('Root', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe.skip('Title', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('title')).toBeInTheDocument();
			});
		});
	});

	describe.skip('Description', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('description')).toBeInTheDocument();
			});
		});
	});

	describe.skip('ActionTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('action-trigger')).toBeInTheDocument();
			});
		});
	});

	describe.skip('CloseTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = render(<Test />);
			await waitFor(() => {
				expect(getByTestId('close-trigger')).toBeInTheDocument();
			});
		});
	});
});
