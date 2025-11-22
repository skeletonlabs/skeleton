import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('RatingGroup', () => {
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

	describe('Items', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
