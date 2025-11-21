import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('Toast', () => {
	describe('Group', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('group')).toBeInTheDocument();
		});
	});

	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Title', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('title')).toBeInTheDocument();
		});
	});

	describe('Description', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('description')).toBeInTheDocument();
		});
	});

	describe('ActionTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('action-trigger')).toBeInTheDocument();
		});
	});

	describe('CloseTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
