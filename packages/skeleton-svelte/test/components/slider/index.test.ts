import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Slider', () => {
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

	describe('ValueText', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('value-text')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('range')).toBeInTheDocument();
		});
	});

	describe('Thumb', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('MarkerGroup', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('marker-group')).toBeInTheDocument();
		});
	});

	describe('Marker', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('marker')).toBeInTheDocument();
		});
	});
});
