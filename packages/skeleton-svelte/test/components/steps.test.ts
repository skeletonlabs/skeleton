import Steps from './test.svelte';
import { render } from 'vitest-browser-svelte';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

describe('Steps', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Steps);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('List', () => {
		it('renders', async () => {
			render(Steps);
			await expect.element(page.getByTestId('list')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			render(Steps);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			render(Steps);
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			render(Steps);
			await expect.element(page.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Separator', () => {
		it('renders', async () => {
			render(Steps);
			await expect.element(page.getByTestId('separator')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			render(Steps);
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('PrevTrigger', () => {
		it('renders', async () => {
			render(Steps);
			await expect.element(page.getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('NextTrigger', () => {
		it('renders', async () => {
			render(Steps);
			await expect.element(page.getByTestId('next-trigger')).toBeInTheDocument();
		});
	});
});
