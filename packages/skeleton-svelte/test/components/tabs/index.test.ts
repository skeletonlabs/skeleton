import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('Tabs', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('List', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('list')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('content')).toBeInTheDocument();
		});
	});
});
