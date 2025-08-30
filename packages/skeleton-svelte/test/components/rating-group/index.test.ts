import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import RatingGroup from './rating-group.svelte';

describe('rating-group', () => {
	describe('root', () => {
		it('renders', () => {
			const screen = render(RatingGroup);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('label', () => {
		it('renders', () => {
			const screen = render(RatingGroup);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('control', () => {
		it('renders', () => {
			const screen = render(RatingGroup);
			expect(screen.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('items', () => {
		it('renders all items', () => {
			const screen = render(RatingGroup);
			expect(screen.getByTestId('item-1')).toBeInTheDocument();
			expect(screen.getByTestId('item-2')).toBeInTheDocument();
			expect(screen.getByTestId('item-3')).toBeInTheDocument();
		});
	});

	describe('hidden-input', () => {
		it('renders', () => {
			const screen = render(RatingGroup);
			expect(screen.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
