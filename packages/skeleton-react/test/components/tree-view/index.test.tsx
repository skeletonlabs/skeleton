import Test from './test';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('TreeView', () => {
	describe('Root', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Tree', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('tree')).toBeInTheDocument();
		});
	});

	describe('Branch', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('branch')).toBeInTheDocument();
		});
	});

	describe('BranchControl', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('branch-control')).toBeInTheDocument();
		});
	});

	describe('BranchIndentGuide', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('branch-indent-guide')).toBeInTheDocument();
		});
	});

	describe('BranchIndicator', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('branch-indicator')).toBeInTheDocument();
		});
	});

	describe('BranchText', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('branch-text')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			render(<Test />);
			expect(screen.getByTestId('item')).toBeInTheDocument();
		});
	});
});
