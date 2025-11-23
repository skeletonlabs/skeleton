import Tooltip from './tooltip.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Tooltip', () => {
	describe('Trigger', () => {
		it('renders', async () => {
			render(Tooltip);
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', async () => {
			render(Tooltip);
			await expect.element(page.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			render(Tooltip);
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('Arrow', () => {
		it('renders', async () => {
			render(Tooltip);
			await expect.element(page.getByTestId('arrow')).toBeInTheDocument();
		});
	});

	describe('ArrowTip', () => {
		it('renders', async () => {
			render(Tooltip);
			await expect.element(page.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
});
