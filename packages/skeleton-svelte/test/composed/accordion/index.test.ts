import component from './index.svelte';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';

describe('accordion', () => {
	describe('root', () => {
		it('renders', () => {
			const screen = render(component);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('item', () => {
		it('renders', () => {
			const screen = render(component);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('heading', () => {
		it('renders', () => {
			const screen = render(component);
			expect(screen.getByTestId('heading')).toBeInTheDocument();
		});
	});

	describe('trigger', () => {
		it('renders', () => {
			const screen = render(component);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('content', () => {
		it('renders', () => {
			const screen = render(component);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
});
