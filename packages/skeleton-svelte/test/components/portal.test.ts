import Portal from './portal.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Portal', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Portal);
			await expect.element(page.getByTestId('child')).toBeInTheDocument();
		});

		it('renders in the target', async () => {
			render(Portal, {
				target: document.body,
			});
			await expect.element(page.getByTestId('child')).toBeInTheDocument();
			expect(page.getByTestId('child').element().parentElement).toBe(document.body);
		});

		it.skip('renders in the parent when disabled', () => {
			render(Portal);
			expect(page.getByTestId('child').element().parentElement).toBe(document.body);
		});
	});
});
