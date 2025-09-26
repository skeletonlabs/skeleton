import AppBar from './app-bar.js';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('AppBar', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<AppBar />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Toolbar', () => {
		it('renders', () => {
			render(<AppBar />);
			expect(screen.getByTestId('toolbar')).toBeInTheDocument();
		});
	});

	describe('Lead', () => {
		it('renders', () => {
			render(<AppBar />);
			expect(screen.getByTestId('lead')).toBeInTheDocument();
		});
	});

	describe('Headline', () => {
		it('renders', () => {
			render(<AppBar />);
			expect(screen.getByTestId('headline')).toBeInTheDocument();
		});
	});

	describe('Trail', () => {
		it('renders', () => {
			render(<AppBar />);
			expect(screen.getByTestId('trail')).toBeInTheDocument();
		});
	});
});
