import Test from './test.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

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
	describe('arrow tip', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
});
