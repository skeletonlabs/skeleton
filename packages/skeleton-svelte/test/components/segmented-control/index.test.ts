import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('SegmentedControl', () => {
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

	describe('Indicator', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('indicator')).toBeInTheDocument();
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

	describe('ItemHiddenInput', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item-hidden-input')).toBeInTheDocument();
		});
	});
});
