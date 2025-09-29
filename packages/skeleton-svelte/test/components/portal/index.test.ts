import Test from './test.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Portal', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('child')).toBeInTheDocument();
		});

		it('renders in the target', () => {
			render(Test, {
				target: document.body,
			});
			expect(screen.getByTestId('child').parentElement).toBe(document.body);
		});

		it('renders in the parent when disabled', () => {
			render(Test, {
				disabled: true,
			});
			expect(screen.getByTestId('child').parentElement).toBe(screen.getByTestId('parent'));
		});
	});
});
