import Test from './test.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Listbox', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('ItemGroupLabel', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-group-label')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('ItemIndicator', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-indicator')).toBeInTheDocument();
		});
	});
});
