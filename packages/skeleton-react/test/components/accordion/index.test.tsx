import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Accordion from './accordion.jsx';

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

	describe('heading', () => {
		it('renders', () => {
			render(<Accordion />);
			expect(screen.getByTestId('heading')).toBeInTheDocument();
		});
	});

	describe('trigger', () => {
		it('renders', () => {
			render(<Accordion />);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('indicator', () => {
		it('renders', () => {
			render(<Accordion />);
			expect(screen.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('content', () => {
		it('renders', () => {
			render(<Accordion />);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
});
