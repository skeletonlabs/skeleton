import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Toast from './toast.svelte';

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
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('title', () => {
		it('renders', () => {
			render(Toast);
			expect(screen.getByTestId('title')).toBeInTheDocument();
		});
	});

	describe('description', () => {
		it('renders', () => {
			render(Toast);
			expect(screen.getByTestId('description')).toBeInTheDocument();
		});
	});

	describe('close trigger', () => {
		it('renders', () => {
			render(Toast);
			expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
