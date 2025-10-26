import Test from './test.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Navigation', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			render(<Test />);
			expect(screen.getByTestId('root')).toHaveAttribute('data-layout');
		});
	});

	describe('Header', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('header')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			render(<Test />);
			expect(screen.getByTestId('header')).toHaveAttribute('data-layout');
		});
	});

	describe('Content', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			render(<Test />);
			expect(screen.getByTestId('content')).toHaveAttribute('data-layout');
		});
	});

	describe('Group', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('group')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			render(<Test />);
			expect(screen.getByTestId('group')).toHaveAttribute('data-layout');
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			render(<Test />);
			expect(screen.getByTestId('label')).toHaveAttribute('data-layout');
		});
	});

	describe('Menu', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('menu')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			render(<Test />);
			expect(screen.getByTestId('menu')).toHaveAttribute('data-layout');
		});
	});

	describe('footer', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('footer')).toBeInTheDocument();
		});

		it('sets the data-layout attribute', () => {
			render(<Test />);
			expect(screen.getByTestId('footer')).toHaveAttribute('data-layout');
		});
	});
});
