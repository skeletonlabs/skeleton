import Progress from './progress.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Progress', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Progress);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			render(Progress);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('ValueText', () => {
		it('renders', async () => {
			render(Progress);
			await expect.element(page.getByTestId('value-text')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', async () => {
			render(Progress);
			await expect.element(page.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', async () => {
			render(Progress);
			await expect.element(page.getByTestId('range')).toBeInTheDocument();
		});
	});

	describe('Circle', () => {
		it('renders', async () => {
			render(Progress);
			await expect.element(page.getByTestId('circle')).toBeInTheDocument();
		});
	});

	describe('CircleTrack', () => {
		it('renders', async () => {
			render(Progress);
			await expect.element(page.getByTestId('circle-track')).toBeInTheDocument();
		});
	});

	describe('CircleRange', () => {
		it('renders', async () => {
			render(Progress);
			await expect.element(page.getByTestId('circle-range')).toBeInTheDocument();
		});
	});
});
