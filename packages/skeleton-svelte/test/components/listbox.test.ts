import Test from './listbox.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Listbox', () => {
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

	describe('Input', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('input')).toBeInTheDocument();
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

	describe('ItemText', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('ItemIndicator', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item-indicator')).toBeInTheDocument();
		});
	});
});
