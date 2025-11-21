import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render, screen } from 'vitest-browser-svelte';

describe('Tooltip', () => {
	describe('Trigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Positioner', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});

	describe('Arrow', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('arrow')).toBeInTheDocument();
		});
	});

	describe('ArrowTip', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
});
