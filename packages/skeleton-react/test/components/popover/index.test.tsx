import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Popover from './popover.js';

describe('popover', () => {
	describe('root', () => {
		it('renders', () => {
			render(<Popover />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});
	describe('trigger', () => {
		it('renders', () => {
			render(<Popover />);
			expect(screen.getByTestId('trigger')).toBeInTheDocument();
		});
	});
	describe('positioner', () => {
		it('renders', () => {
			render(<Popover />);
			expect(screen.getByTestId('positioner')).toBeInTheDocument();
		});
	});
	describe('content', () => {
		it('renders', () => {
			render(<Popover />);
			expect(screen.getByTestId('content')).toBeInTheDocument();
		});
	});
	describe('arrow', () => {
		it('renders', () => {
			render(<Popover />);
			expect(screen.getByTestId('arrow')).toBeInTheDocument();
		});
	});
	describe('arrow tip', () => {
		it('renders', () => {
			render(<Popover />);
			expect(screen.getByTestId('arrow-tip')).toBeInTheDocument();
		});
	});
	describe('title', () => {
		it('renders', () => {
			render(<Popover />);
			expect(screen.getByTestId('title')).toBeInTheDocument();
		});
	});
	describe('description', () => {
		it('renders', () => {
			render(<Popover />);
			expect(screen.getByTestId('description')).toBeInTheDocument();
		});
	});
	describe('close trigger', () => {
		it('renders', () => {
			render(<Popover />);
			expect(screen.getByTestId('close-trigger')).toBeInTheDocument();
		});
	});
});
