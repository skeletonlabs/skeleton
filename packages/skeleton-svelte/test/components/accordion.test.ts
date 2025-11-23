import Accordion from './accordion.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Accordion', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Accordion);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			render(Accordion);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemTrigger', () => {
		it('renders', async () => {
			render(Accordion);
			await expect.element(page.getByTestId('item-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemContent', () => {
		it('renders', async () => {
			render(Accordion);
			await expect.element(page.getByTestId('item-content')).toBeInTheDocument();
		});
	});
});
