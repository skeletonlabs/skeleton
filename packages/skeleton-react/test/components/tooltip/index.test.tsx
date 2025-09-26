import Tooltip from './tooltip.js';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Tooltip', () => {
	describe('Trigger', () => {
		it('renders', () => {
			render(<Tooltip />);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});
	describe('Positioner', () => {
		it('renders', () => {
			render(<Tooltip />);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});
	describe('Arrow', () => {
		it('renders', () => {
			render(<Tooltip />);
			expect(screen.getByTestId('arrow')).toBeInTheDocument();
		});
	});
	describe('arrow tip', () => {
		it('renders', () => {
			render(<Tooltip />);
			expect(screen.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
});
