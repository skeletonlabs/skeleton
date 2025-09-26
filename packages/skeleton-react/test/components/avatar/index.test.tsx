import Avatar from './avatar.js';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Avatar', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<Avatar />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Image', () => {
		it('renders', () => {
			render(<Avatar />);
			expect(screen.getByTestId('image')).toBeInTheDocument();
		});
	});

	describe('Fallback', () => {
		it('renders', () => {
			render(<Avatar />);
			expect(screen.getByTestId('fallback')).toBeInTheDocument();
		});
	});
});
