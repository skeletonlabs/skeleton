import Pagination from './pagination.js';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('pagination', () => {
	describe('root', () => {
		it('renders', () => {
			render(<Pagination />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('prev-trigger', () => {
		it('renders', () => {
			render(<Pagination />);
			expect(screen.getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('item', () => {
		it('renders', () => {
			render(<Pagination />);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ellipsis', () => {
		it('renders', () => {
			render(<Pagination />);
			expect(screen.getByTestId('ellipsis')).toBeInTheDocument();
		});
	});

	describe('next-trigger', () => {
		it('renders', () => {
			render(<Pagination />);
			expect(screen.getByTestId('next-trigger')).toBeInTheDocument();
		});
	});
});
