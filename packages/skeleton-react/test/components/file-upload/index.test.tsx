import FileUpload from './file-upload.js';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('FileUpload', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Dropzone', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('dropzone')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemName', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('item-name')).toBeInTheDocument();
		});
	});

	describe('ItemSizeText', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('item-size-text')).toBeInTheDocument();
		});
	});

	describe('ItemDeleteTrigger', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
