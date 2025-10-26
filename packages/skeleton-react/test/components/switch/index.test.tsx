import Test from './test.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Switch', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Thumb', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});
});
