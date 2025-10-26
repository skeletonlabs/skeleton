import Test from './test.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Accordion', () => {
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

	describe('ItemTrigger', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemIndicator', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item-indicator')).toBeInTheDocument();
		});
	});

	describe('ItemContent', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item-content')).toBeInTheDocument();
		});
	});
});
