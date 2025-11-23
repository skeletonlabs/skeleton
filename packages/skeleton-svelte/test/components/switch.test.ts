import Test from './switch.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Switch', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Thumb', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});
});
