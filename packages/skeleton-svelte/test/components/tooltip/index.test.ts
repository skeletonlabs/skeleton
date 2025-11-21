import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('Tooltip', () => {
	describe('Trigger', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Arrow', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('arrow')).toBeInTheDocument();
		});
	});

	describe('ArrowTip', () => {
		it('renders', async () => {
			const { getByTestId } = await render(Test);
			expect(getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
});
