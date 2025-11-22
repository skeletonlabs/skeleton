import Test from './test.js';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Pagination', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('FirstTrigger', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('first-trigger')).toBeInTheDocument();
		});
	});

	describe('PrevTrigger', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('Ellipsis', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('ellipsis')).toBeInTheDocument();
		});
	});

	describe('NextTrigger', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('next-trigger')).toBeInTheDocument();
		});
	});

	describe('LastTrigger', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('last-trigger')).toBeInTheDocument();
		});
	});
});
