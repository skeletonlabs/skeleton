import Accordion from './accordion.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('accordion', () => {
	describe('root', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('item', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item-heading', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('item-heading')).toBeInTheDocument();
		});
	});

	describe('item-trigger', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('item-trigger')).toBeInTheDocument();
		});
	});

	describe('item-content', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('item-content')).toBeInTheDocument();
		});
	});
});
