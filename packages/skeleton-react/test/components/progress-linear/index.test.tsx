import ProgressLinear from './progress-linear';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('ProgressLinear', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<ProgressLinear />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(<ProgressLinear />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', () => {
			render(<ProgressLinear />);
			expect(screen.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', () => {
			render(<ProgressLinear />);
			expect(screen.getByTestId('range')).toBeInTheDocument();
		});
	});
});
