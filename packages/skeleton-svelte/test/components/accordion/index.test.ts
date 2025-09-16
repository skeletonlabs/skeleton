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

	describe('heading', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('heading')).toBeInTheDocument();
		});
	});

	describe('trigger', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('content', () => {
		it('renders', () => {
			render(Accordion);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
});
