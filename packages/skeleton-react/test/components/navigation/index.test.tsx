import Test from './test.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Navigation', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('root')).toHaveAttribute('data-layout');
		});
	});

	describe('Header', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('header')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('header')).toHaveAttribute('data-layout');
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('content')).toHaveAttribute('data-layout');
		});
	});

	describe('Group', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('group')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('group')).toHaveAttribute('data-layout');
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('label')).toHaveAttribute('data-layout');
		});
	});

	describe('Menu', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('menu')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('menu')).toHaveAttribute('data-layout');
		});
	});

	describe('footer', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('footer')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('footer')).toHaveAttribute('data-layout');
		});
	});
});
