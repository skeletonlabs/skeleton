import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render, screen } from 'vitest-browser-svelte';

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
