import Test from './test.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Popover', () => {
	describe('Trigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});
	describe('Positioner', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});
	describe('Content', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
	describe('Arrow', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('arrow')).toBeInTheDocument();
		});
	});
	describe('arrow tip', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
	describe('Title', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('title')).toBeInTheDocument();
		});
	});
	describe('Description', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('description')).toBeInTheDocument();
		});
	});
	describe('close trigger', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
