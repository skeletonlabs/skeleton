import Test from './test.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('SegmentedControl', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item text', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-text')).toBeInTheDocument();
		});
	});

	describe('item hidden input', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item-hidden-input')).toBeInTheDocument();
		});
	});
});
