import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import FileUpload from './file-upload.svelte';

describe('file-upload', () => {
	describe('root', () => {
		it('renders', () => {
			const screen = render(FileUpload);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('dropzone', () => {
		it('renders', () => {
			const screen = render(FileUpload);
			expect(screen.getByTestId('dropzone')).toBeInTheDocument();
		});
	});

	describe('trigger', () => {
		it('renders', () => {
			const screen = render(FileUpload);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('item-group', () => {
		it('renders', () => {
			const screen = render(FileUpload);
			expect(screen.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('item', () => {
		it('renders', () => {
			const screen = render(FileUpload);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item-name', () => {
		it('renders', () => {
			const screen = render(FileUpload);
			expect(screen.getByTestId('item-name')).toBeInTheDocument();
		});
	});

	describe('item-delete-trigger', () => {
		it('renders', () => {
			const screen = render(FileUpload);
			expect(screen.getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('hidden-input', () => {
		it('renders', () => {
			const screen = render(FileUpload);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
