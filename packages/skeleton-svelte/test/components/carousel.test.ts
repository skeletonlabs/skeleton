import Carousel from './carousel.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Carousel', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Carousel);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			render(Carousel);
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('PrevTrigger', () => {
		it('renders', async () => {
			render(Carousel);
			await expect.element(page.getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('NextTrigger', () => {
		it('renders', async () => {
			render(Carousel);
			await expect.element(page.getByTestId('next-trigger')).toBeInTheDocument();
		});
	});

	describe('AutoplayTrigger', () => {
		it('renders', async () => {
			render(Carousel);
			await expect.element(page.getByTestId('autoplay-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', async () => {
			render(Carousel);
			await expect.element(page.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			render(Carousel);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('IndicatorGroup', () => {
		it('renders', async () => {
			render(Carousel);
			await expect.element(page.getByTestId('indicator-group')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			render(Carousel);
			await expect.element(page.getByTestId('indicator')).toBeInTheDocument();
		});
	});
});
