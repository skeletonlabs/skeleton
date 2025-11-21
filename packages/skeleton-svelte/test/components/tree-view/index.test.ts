import Test from './test.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

describe('TreeView', () => {
	describe('Root', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Tree', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('tree')).toBeInTheDocument();
		});
	});

	describe('Branch', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('branch')).toBeInTheDocument();
		});
	});

	describe('BranchControl', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('branch-control')).toBeInTheDocument();
		});
	});

	describe('BranchIndentGuide', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('branch-indent-guide')).toBeInTheDocument();
		});
	});

	describe('BranchIndicator', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('branch-indicator')).toBeInTheDocument();
		});
	});

	describe('BranchText', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('branch-text')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', () => {
			const { getByTestId } = render(Test);
			expect(getByTestId('item')).toBeInTheDocument();
		});
	});
});
