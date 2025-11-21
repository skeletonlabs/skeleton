import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('Listbox', () => {
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

	describe('Input', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('input')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('ItemGroup', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item-group')).toBeInTheDocument();
		});
	});

	describe('ItemGroupLabel', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item-group-label')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemText', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('ItemIndicator', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item-indicator')).toBeInTheDocument();
		});
	});
});
