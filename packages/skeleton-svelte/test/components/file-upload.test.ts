import FileUpload from './file-upload.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('FileUpload', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Dropzone', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('dropzone')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('ClearTrigger', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('clear-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemName', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('item-name')).toBeInTheDocument();
		});
	});

	describe('ItemSizeText', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('item-size-text')).toBeInTheDocument();
		});
	});

	describe('ItemDeleteTrigger', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			render(FileUpload);
			await expect.element(page.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
