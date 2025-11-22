import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('AppBar', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Toolbar', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('toolbar')).toBeInTheDocument();
		});
	});

	describe('Lead', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('lead')).toBeInTheDocument();
		});
	});

	describe('Headline', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('headline')).toBeInTheDocument();
		});
	});

	describe('Trail', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('trail')).toBeInTheDocument();
		});
	});
});
