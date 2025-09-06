import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Tooltip from './tooltip.js';

describe('tooltip', () => {
	describe('root', () => {
		it('renders', () => {
			render(<Tooltip />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});
	describe('trigger', () => {
		it('renders', () => {
			render(<Tooltip />);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});
	describe('positioner', () => {
		it('renders', () => {
			render(<Tooltip />);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});
	describe('arrow', () => {
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
