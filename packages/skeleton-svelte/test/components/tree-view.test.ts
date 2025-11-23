import Test from './tree-view.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('TreeView', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Tree', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('tree')).toBeInTheDocument();
		});
	});

	describe('Branch', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('branch')).toBeInTheDocument();
		});
	});

	describe('BranchControl', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('branch-control')).toBeInTheDocument();
		});
	});

	describe('BranchIndentGuide', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('branch-indent-guide')).toBeInTheDocument();
		});
	});

	describe('BranchIndicator', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('branch-indicator')).toBeInTheDocument();
		});
	});

	describe('BranchText', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('branch-text')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			render(Test);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});
});
