import Toast from './toast.svelte';
import { render, screen, waitFor } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('toast', () => {
	describe('group', () => {
		it('renders', () => {
			render(Toast);
			expect(screen.getByTestId('group')).toBeInTheDocument();
		});
	});

	describe('root', () => {
		it('renders', async () => {
			render(Toast);
			await waitFor(() => {
				expect(screen.getByTestId('root')).toBeInTheDocument();
			});
		});
	});

	describe('title', () => {
		it('renders', async () => {
			render(Toast);
			await waitFor(() => {
				expect(screen.getByTestId('title')).toBeInTheDocument();
			});
		});
	});

	describe('description', () => {
		it('renders', async () => {
			render(Toast);
			await waitFor(() => {
				expect(screen.getByTestId('description')).toBeInTheDocument();
			});
		});
	});

	describe('action trigger', () => {
		it('renders', async () => {
			render(Toast);
			await waitFor(() => {
				expect(screen.getByTestId('action-trigger')).toBeInTheDocument();
			});
		});
	});

	describe('close trigger', () => {
		it('renders', async () => {
			render(Toast);
			await waitFor(() => {
				expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
			});
		});
	});
});
