import SegmentedControl from './segmented-control';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('SegmentedControl', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<SegmentedControl />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', () => {
			render(<SegmentedControl />);
			expect(screen.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(<SegmentedControl />);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item text', () => {
		it('renders', () => {
			render(<SegmentedControl />);
			expect(screen.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('item hidden input', () => {
		it('renders', () => {
			render(<SegmentedControl />);
			expect(screen.getByTestId('item-hidden-input')).toBeInTheDocument();
		});
	});
});
