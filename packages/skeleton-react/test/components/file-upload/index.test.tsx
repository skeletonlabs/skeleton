import FileUpload from './file-upload.js';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('file-upload', () => {
	describe('root', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('dropzone', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('dropzone')).toBeInTheDocument();
		});
	});

	describe('trigger', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('item-group', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('item', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item-name', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('item-name')).toBeInTheDocument();
		});
	});

	describe('item-size-text', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('item-size-text')).toBeInTheDocument();
		});
	});

	describe('item-delete-trigger', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('hidden-input', () => {
		it('renders', () => {
			render(<FileUpload />);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
