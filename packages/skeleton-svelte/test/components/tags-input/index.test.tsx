import TagsInput from './tags-input.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('tags-input', () => {
	describe('root', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('label', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('control', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('item', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item preview', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('item-preview')).toBeInTheDocument();
		});
	});

	describe('item text', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('item delete trigger', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('item input', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('item-input')).toBeInTheDocument();
		});
	});

	describe('input', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('clear trigger', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('clear-trigger')).toBeInTheDocument();
		});
	});

	describe('hidden input', () => {
		it('renders', () => {
			render(TagsInput);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
