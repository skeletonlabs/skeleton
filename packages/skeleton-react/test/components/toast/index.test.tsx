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

	describe.skip('root', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe.skip('title', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('title')).toBeInTheDocument();
			});
		});
	});

	describe.skip('description', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('description')).toBeInTheDocument();
			});
		});
	});

	describe.skip('action trigger', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('action-trigger')).toBeInTheDocument();
			});
		});
	});

	describe.skip('close trigger', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
			});
		});
	});
});
