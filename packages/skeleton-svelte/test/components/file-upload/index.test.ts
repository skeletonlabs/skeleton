import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('FileUpload', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Dropzone', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('dropzone')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemName', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('item-name')).toBeInTheDocument();
		});
	});

	describe('ItemSizeText', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('item-size-text')).toBeInTheDocument();
		});
	});

	describe('ItemDeleteTrigger', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
