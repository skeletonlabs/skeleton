import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Toast from './toast.js';
import { act } from 'react';

describe('toast', () => {
	describe('group', () => {
		it('renders', () => {
			render(<Toast />);
			expect(screen.getByTestId('group')).toBeInTheDocument();
		});
	});
	describe('root', () => {
		it('renders', async () => {
			render(<Toast />);
			await act(async () => {});
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	// describe('title', () => {
	// 	it('renders', () => {
	// 		render(<Toast />);
	// 		expect(screen.getByTestId('title')).toBeInTheDocument();
	// 	});
	// });

	// describe('description', () => {
	// 	it('renders', () => {
	// 		render(<Toast />);
	// 		expect(screen.getByTestId('description')).toBeInTheDocument();
	// 	});
	// });

	// describe('close trigger', () => {
	// 	it('renders', () => {
	// 		render(<Toast />);
	// 		expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
	// 	});
	// });
});
