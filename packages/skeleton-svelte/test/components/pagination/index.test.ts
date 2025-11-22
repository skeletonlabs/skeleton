import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Pagination', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('FirstTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('first-trigger')).toBeInTheDocument();
		});
	});

	describe('PrevTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('Ellipsis', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('ellipsis')).toBeInTheDocument();
		});
	});

	describe('NextTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('next-trigger')).toBeInTheDocument();
		});
	});

	describe('LastTrigger', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('last-trigger')).toBeInTheDocument();
		});
	});
});
