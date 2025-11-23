import Test from './menu.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Menu', () => {
	describe('Trigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('ContextTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('context-trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			render(Test);
			for (const element of page.getByTestId('indicator').all()) {
				await expect.element(element).toBeInTheDocument();
			}
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

	describe('ItemGroup', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('ItemGroupLabel', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item-group-label')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('OptionItem', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('option-item')).toBeInTheDocument();
		});
	});

	describe('TriggerItem', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('trigger-item')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', async () => {
			render(Test);
			for (const element of page.getByTestId('item-text').all()) {
				await expect.element(element).toBeInTheDocument();
			}
		});
	});

	describe('ItemIndicator', () => {
		it('renders', async () => {
			render(Test);
			for (const element of page.getByTestId('item-indicator').all()) {
				await expect.element(element).toBeInTheDocument();
			}
		});
	});

	describe('Separator', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('separator')).toBeInTheDocument();
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
});
