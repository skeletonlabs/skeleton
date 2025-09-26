import Accordion from './accordion.svelte';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('Accordion', () => {
	describe('Root', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('ItemHeading', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('item-heading')).toBeInTheDocument();
		});
	});

	describe('ItemTrigger', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('item-trigger')).toBeInTheDocument();
		});
	});

	describe('ItemContent', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('item-content')).toBeInTheDocument();
		});
	});
});
