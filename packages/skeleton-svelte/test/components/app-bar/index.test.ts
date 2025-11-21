import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('AppBar', () => {
	describe('Root', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Toolbar', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('toolbar')).toBeInTheDocument();
		});
	});

	describe('Lead', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('lead')).toBeInTheDocument();
		});
	});

	describe('Headline', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('headline')).toBeInTheDocument();
		});
	});

	describe('Trail', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('trail')).toBeInTheDocument();
		});
	});
});
