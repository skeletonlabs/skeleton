import Test from './test.svelte';
import { render, screen, waitFor } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Toast', () => {
	describe('Group', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('group')).toBeInTheDocument();
		});
	});

	describe('Root', () => {
		it('renders', async () => {
			render(Test);
			await waitFor(() => {
				expect(screen.getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe('Title', () => {
		it('renders', async () => {
			render(Test);
			await waitFor(() => {
				expect(screen.getByTestId('title')).toBeInTheDocument();
			});
		});
	});

	describe('Description', () => {
		it('renders', async () => {
			render(Test);
			await waitFor(() => {
				expect(screen.getByTestId('description')).toBeInTheDocument();
			});
		});
	});

	describe('ActionTrigger', () => {
		it('renders', async () => {
			render(Test);
			await waitFor(() => {
				expect(screen.getByTestId('action-trigger')).toBeInTheDocument();
			});
		});
	});

	describe('CloseTrigger', () => {
		it('renders', async () => {
			render(Test);
			await waitFor(() => {
				expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
			});
		});
	});
});
