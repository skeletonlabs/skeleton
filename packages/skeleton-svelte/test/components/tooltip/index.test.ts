import Tooltip from './tooltip.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('tooltip', () => {
	describe('trigger', () => {
		it('renders', () => {
			render(Tooltip);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});
	describe('positioner', () => {
		it('renders', () => {
			render(Tooltip);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});
	describe('arrow', () => {
		it('renders', () => {
			render(Tooltip);
			expect(screen.getByTestId('arrow')).toBeInTheDocument();
		});
	});
	describe('arrow tip', () => {
		it('renders', () => {
			render(Tooltip);
			expect(screen.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
});
