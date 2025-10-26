import Test from './test.jsx';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Tabs', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe('List', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('list')).toBeInTheDocument();
			});
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('trigger')).toBeInTheDocument();
			});
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('indicator')).toBeInTheDocument();
			});
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('content')).toBeInTheDocument();
			});
		});
	});
});
