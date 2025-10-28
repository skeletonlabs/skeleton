import Test from './test.jsx';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('SegmentedControl', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('label')).toBeInTheDocument();
			});
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('control')).toBeInTheDocument();
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

	describe('Item', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('item')).toBeInTheDocument();
			});
		});
	});

	describe('ItemText', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('item-text')).toBeInTheDocument();
			});
		});
	});

	describe('ItemHiddenInput', () => {
		it('renders', async () => {
			render(<Test />);
			await waitFor(() => {
				expect(screen.getByTestId('item-hidden-input')).toBeInTheDocument();
			});
		});
	});
});
