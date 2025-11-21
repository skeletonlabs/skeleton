import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('Portal', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('child')).toBeInTheDocument();
		});

		it('renders in the target', async () => {
			const { getByTestId } = await render(Test, {
				target: document.body,
			});
			expect(getByTestId('child').parentElement).toBe(document.body);
		});

		it('renders in the parent when disabled', async () => {
			const { getByTestId } = await render(Test, {
				disabled: true,
			});
			expect(getByTestId('child').parentElement).toBe(getByTestId('parent'));
		});
	});
});
