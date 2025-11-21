import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('TagsInput', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemPreview', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item-preview')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('ItemDeleteTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item-delete-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemInput', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item-input')).toBeInTheDocument();
		});
	});

	describe('Input', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('ClearTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('clear-trigger')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
