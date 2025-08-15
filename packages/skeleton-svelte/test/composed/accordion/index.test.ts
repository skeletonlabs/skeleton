import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import Accordion from './accordion.svelte';

describe('accordion', () => {
	describe('root', () => {
		it('renders', () => {
			const screen = render(Accordion);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('item', () => {
		it('renders', () => {
			const screen = render(Accordion);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('heading', () => {
		it('renders', () => {
			const screen = render(Accordion);
			expect(screen.getByTestId('heading')).toBeInTheDocument();
		});
	});

	describe('trigger', () => {
		it('renders', () => {
			const screen = render(Accordion);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('content', () => {
		it('renders', () => {
			const screen = render(Accordion);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
});
