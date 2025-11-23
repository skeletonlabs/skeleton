import Test from './tags-input.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('TagsInput', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemPreview', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item-preview')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('ItemDeleteTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemInput', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item-input')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('ClearTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('clear-trigger')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
