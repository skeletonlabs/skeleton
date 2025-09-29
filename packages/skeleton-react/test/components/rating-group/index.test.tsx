import Test from './test';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('RatingGroup', () => {
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

	describe('Control', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Items', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
