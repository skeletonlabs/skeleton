import RatingGroup from './rating-group.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('RatingGroup', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<RatingGroup />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(<RatingGroup />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', () => {
			render(<RatingGroup />);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Items', () => {
		it('renders all items', () => {
			render(<RatingGroup />);
			expect(screen.getByTestId('item-1')).toBeInTheDocument();
			expect(screen.getByTestId('item-2')).toBeInTheDocument();
			expect(screen.getByTestId('item-3')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', () => {
			render(<RatingGroup />);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
