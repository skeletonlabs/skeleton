import Switch from './switch';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('switch', () => {
	describe('root', () => {
		it('renders', () => {
			render(<Switch />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('hidden input', () => {
		it('renders', () => {
			render(<Switch />);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});

	describe('control', () => {
		it('renders', () => {
			render(<Switch />);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('thumb', () => {
		it('renders', () => {
			render(<Switch />);
			expect(screen.getByTestId('thumb')).toBeInTheDocument();
		});
	});

	describe('label', () => {
		it('renders', () => {
			render(<Switch />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});
});
