import Test from './test';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Navigation', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Header', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('header')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('Group', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('group')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Menu', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('menu')).toBeInTheDocument();
		});
	});

	describe('footer', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('footer')).toBeInTheDocument();
		});
	});
});
