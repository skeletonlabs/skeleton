import Test from './test.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('ToggleGroup', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});
});
