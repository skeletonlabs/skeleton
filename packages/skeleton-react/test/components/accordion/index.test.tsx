import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Accordion', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemTrigger', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemIndicator', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item-indicator')).toBeInTheDocument();
		});
	});

	describe('ItemContent', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item-content')).toBeInTheDocument();
		});
	});
});
