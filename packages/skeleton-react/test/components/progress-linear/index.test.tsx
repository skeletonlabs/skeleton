import Test from './test';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('ProgressLinear', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Track', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('track')).toBeInTheDocument();
		});
	});

	describe('Range', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('range')).toBeInTheDocument();
		});
	});
});
