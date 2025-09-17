import SegmentedControl from './segmented-control';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('segmented-control', () => {
	describe('root', () => {
		it('renders', () => {
			render(<SegmentedControl />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('indicator', () => {
		it('renders', () => {
			render(<SegmentedControl />);
			expect(screen.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('item', () => {
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
