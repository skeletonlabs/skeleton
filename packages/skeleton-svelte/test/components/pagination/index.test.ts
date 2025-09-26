import Test from './test.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Pagination', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('PrevTrigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('Ellipsis', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('ellipsis')).toBeInTheDocument();
		});
	});

	describe('NextTrigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('next-trigger')).toBeInTheDocument();
		});
	});
});
