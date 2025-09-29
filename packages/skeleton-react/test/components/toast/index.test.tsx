import Test from './test';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Toast', () => {
	describe('Group', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('group')).toBeInTheDocument();
		});
	});

	describe.skip('Root', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe.skip('Title', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('title')).toBeInTheDocument();
			});
		});
	});

	describe.skip('Description', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('description')).toBeInTheDocument();
			});
		});
	});

	describe.skip('ActionTrigger', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('action-trigger')).toBeInTheDocument();
			});
		});
	});

	describe.skip('CloseTrigger', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
			});
		});
	});
});
