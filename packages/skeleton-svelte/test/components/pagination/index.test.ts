import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('Pagination', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('FirstTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('first-trigger')).toBeInTheDocument();
		});
	});

	describe('PrevTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('Ellipsis', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('ellipsis')).toBeInTheDocument();
		});
	});

	describe('NextTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('next-trigger')).toBeInTheDocument();
		});
	});

	describe('LastTrigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('last-trigger')).toBeInTheDocument();
		});
	});
});
