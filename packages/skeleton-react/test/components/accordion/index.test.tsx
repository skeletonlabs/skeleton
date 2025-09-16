import Accordion from './accordion.jsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('accordion', () => {
	describe('root', () => {
		it('renders', () => {
			render(<Accordion />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('item', () => {
		it('renders', () => {
			render(<Accordion />);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('item-heading', () => {
		it('renders', () => {
			render(<Accordion />);
			expect(screen.getByTestId('item-heading')).toBeInTheDocument();
		});
	});

	describe('item-trigger', () => {
		it('renders', () => {
			render(<Accordion />);
			expect(screen.getByTestId('item-trigger')).toBeInTheDocument();
		});
	});

	describe('item-indicator', () => {
		it('renders', () => {
			render(<Accordion />);
			expect(screen.getByTestId('item-indicator')).toBeInTheDocument();
		});
	});

	describe('item-content', () => {
		it('renders', () => {
			render(<Accordion />);
			expect(screen.getByTestId('item-content')).toBeInTheDocument();
		});
	});
});
