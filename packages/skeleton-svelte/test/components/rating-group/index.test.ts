import RatingGroup from './rating-group.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('rating-group', () => {
	describe('root', () => {
		it('renders', () => {
			render(RatingGroup);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('label', () => {
		it('renders', () => {
			render(RatingGroup);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('control', () => {
		it('renders', () => {
			render(RatingGroup);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('items', () => {
		it('renders all items', () => {
			render(RatingGroup);
			expect(screen.getByTestId('item-1')).toBeInTheDocument();
			expect(screen.getByTestId('item-2')).toBeInTheDocument();
			expect(screen.getByTestId('item-3')).toBeInTheDocument();
		});
	});

	describe('hidden-input', () => {
		it('renders', () => {
			render(RatingGroup);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
