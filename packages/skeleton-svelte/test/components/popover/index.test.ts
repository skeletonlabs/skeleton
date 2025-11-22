import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Popover', () => {
	describe('Trigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('Arrow', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('arrow')).toBeInTheDocument();
		});
	});

	describe('ArrowTip', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});

	describe('Title', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('title')).toBeInTheDocument();
		});
	});

	describe('Description', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('description')).toBeInTheDocument();
		});
	});

	describe('CloseTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
