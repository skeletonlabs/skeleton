import TreeView from './tree-view.jsx';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

describe('TreeView', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<TreeView />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			await render(<TreeView />);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Tree', () => {
		it('renders', async () => {
			await render(<TreeView />);
			await expect.element(page.getByTestId('tree')).toBeInTheDocument();
		});
	});

	describe('Node', () => {
		it('renders', async () => {
			await render(<TreeView />);
			await expect.element(page.getByTestId('node')).toBeInTheDocument();
		});
	});

	describe('NodeExpandTrigger', () => {
		it('renders', async () => {
			await render(<TreeView />);
			await expect.element(page.getByTestId('node-expand-trigger')).toBeInTheDocument();
		});
	});

	describe('IndentGuide', () => {
		it('renders', async () => {
			await render(<TreeView />);
			await expect.element(page.getByTestId('indent-guide')).toBeInTheDocument();
		});
	});

	describe('NodeIndicator', () => {
		it('renders', async () => {
			await render(<TreeView />);
			await expect.element(page.getByTestId('node-indicator')).toBeInTheDocument();
		});
	});

	describe('NodeText', () => {
		it('renders', async () => {
			await render(<TreeView />);
			await expect.element(page.getByTestId('node-text')).toBeInTheDocument();
		});
	});

	describe('Node (leaf)', () => {
		it('renders', async () => {
			await render(<TreeView />);
			await expect.element(page.getByTestId('leaf-node')).toBeInTheDocument();
		});
	});
});
