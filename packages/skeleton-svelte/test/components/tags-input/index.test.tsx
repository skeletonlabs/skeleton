import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render, screen } from 'vitest-browser-svelte';

describe('TagsInput', () => {
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

	describe('Control', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemPreview', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-preview')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('ItemDeleteTrigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemInput', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-input')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('ClearTrigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('clear-trigger')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
