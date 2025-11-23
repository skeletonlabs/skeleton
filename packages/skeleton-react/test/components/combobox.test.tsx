import Test from './combobox.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('Combobox', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('ItemGroupLabel', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item-group-label')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('ItemIndicator', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item-indicator')).toBeInTheDocument();
		});
	});
});
