import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render, screen } from 'vitest-browser-svelte';

describe('ToggleGroup', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(Test);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});
});
