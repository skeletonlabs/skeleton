import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render, screen } from 'vitest-browser-svelte';

describe('Pagination', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('FirstTrigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('first-trigger')).toBeInTheDocument();
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

	describe('LastTrigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('last-trigger')).toBeInTheDocument();
		});
	});
});
