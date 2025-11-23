import TagsInput from './tags-input.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('TagsInput', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item preview', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('item-preview')).toBeInTheDocument();
		});
	});

	describe('item text', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('item delete trigger', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('item input', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('item-input')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('clear trigger', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('clear-trigger')).toBeInTheDocument();
		});
	});

	describe('hidden input', () => {
		it('renders', async () => {
			await render(<TagsInput />);
			await expect.element(page.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
