import ToggleGroup from './toggle-group.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('ToggleGroup', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(ToggleGroup);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			render(ToggleGroup);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});
});
