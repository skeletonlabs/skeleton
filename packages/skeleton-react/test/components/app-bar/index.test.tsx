import AppBar from './app-bar.js';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('app-bar', () => {
	describe('root', () => {
		it('renders', () => {
			render(<AppBar />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('toolbar', () => {
		it('renders', () => {
			render(<AppBar />);
			expect(screen.getByTestId('toolbar')).toBeInTheDocument();
		});
	});

	describe('lead', () => {
		it('renders', () => {
			render(<AppBar />);
			expect(screen.getByTestId('lead')).toBeInTheDocument();
		});
	});

	describe('headline', () => {
		it('renders', () => {
			render(<AppBar />);
			expect(screen.getByTestId('headline')).toBeInTheDocument();
		});
	});

	describe('trail', () => {
		it('renders', () => {
			render(<AppBar />);
			expect(screen.getByTestId('trail')).toBeInTheDocument();
		});
	});
});
