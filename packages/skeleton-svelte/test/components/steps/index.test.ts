import Test from './test.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Steps', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('List', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('list')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Separator', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('separator')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});

	describe('PrevTrigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('prev-trigger')).toBeInTheDocument();
		});
	});

	describe('NextTrigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('next-trigger')).toBeInTheDocument();
		});
	});
});
