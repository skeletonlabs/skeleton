import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render, screen } from 'vitest-browser-svelte';

describe('FileUpload', () => {
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

	describe('Dropzone', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('dropzone')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemName', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-name')).toBeInTheDocument();
		});
	});

	describe('ItemSizeText', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-size-text')).toBeInTheDocument();
		});
	});

	describe('ItemDeleteTrigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
