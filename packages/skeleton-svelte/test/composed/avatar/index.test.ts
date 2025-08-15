import component from './index.svelte';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';

describe('avatar', () => {
	describe('root', () => {
		it('renders', () => {
			const screen = render(component);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('image', () => {
		it('renders', () => {
			const screen = render(component);
			expect(screen.getByTestId('image')).toBeInTheDocument();
		});
	});

	describe('fallback', () => {
		it('renders', () => {
			const screen = render(component);
			expect(screen.getByTestId('fallback')).toBeInTheDocument();
		});
	});
});
