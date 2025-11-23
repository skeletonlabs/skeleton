import Test from './tree-view.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('TreeView', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Tree', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('tree')).toBeInTheDocument();
		});
	});

	describe('Branch', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('branch')).toBeInTheDocument();
		});
	});

	describe('BranchControl', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('branch-control')).toBeInTheDocument();
		});
	});

	describe('BranchIndentGuide', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('branch-indent-guide')).toBeInTheDocument();
		});
	});

	describe('BranchIndicator', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('branch-indicator')).toBeInTheDocument();
		});
	});

	describe('BranchText', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('branch-text')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			await render(<Test />);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});
});
