import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import TreeView from './TreeView.svelte';
import type { TreeViewProps } from './types.js';
import { mockSnippet } from '../../internal/test-utils.js';

describe('TreeView', () => {
	const testIds = {
		root: 'tree',
		branch: 'tree-branch',
		indicator: 'tree-indicator',
		branchIcon: 'tree-branch-icon',
		itemIcon: 'tree-item-icon',
		branchText: 'tree-branch-text',
		itemText: 'tree-item-text'
	} as const;
	const commonProps: TreeViewProps = {
		collection: [
			{
				id: 'LEVEL_1',
				value: 'node_modules',
				children: [{ id: 'LEVEL_2.1', value: 'zag-js' }]
			}
		]
	} as const;

	it('Renders the component', () => {
		render(TreeView, { ...commonProps });
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it(`should render with the branchIndicator snippet`, () => {
		const testValue = 'testIndicator';
		render(TreeView, { ...commonProps, branchIndicator: mockSnippet(testValue) });
		const input = screen.getByTestId(testIds.indicator);
		expect(input).toHaveTextContent(testValue);
	});

	it(`should render with the branchIcon snippet`, () => {
		const testValue = 'testIcon';
		render(TreeView, { ...commonProps, branchIcon: mockSnippet(testValue) });
		const input = screen.getByTestId(testIds.branchIcon);
		expect(input).toHaveTextContent(testValue);
	});

	it(`should render with the value/text of a branch`, () => {
		const valueToTest = commonProps.collection[0].value;
		render(TreeView, { ...commonProps });
		const input = screen.getByTestId(testIds.branchText);
		expect(input).toHaveTextContent(valueToTest);
	});

	it(`should render expanded with the itemIcon snippet`, () => {
		const testValue = 'testIcon';
		render(TreeView, { ...commonProps, defaultExpandedValue: ['LEVEL_1'], itemIcon: mockSnippet(testValue) });
		const input = screen.getByTestId(testIds.itemIcon);
		expect(input).toHaveTextContent(testValue);
	});

	it(`should render expanded with the value/text of an item`, () => {
		const nodeToTest = commonProps.collection[0].children?.at(0);
		render(TreeView, { ...commonProps, defaultExpandedValue: ['LEVEL_1'] });
		const input = screen.getByTestId(testIds.itemText);
		expect(nodeToTest).toBeDefined();
		expect(input).toHaveTextContent(nodeToTest?.value ?? '');
	});

	// --- TODO: add tests that resemble these: ---

	// it('should render the component in the disabled state', () => {
	// 	render(TreeView, { ...commonProps, disabled: true });
	// 	const component = screen.getByTestId(testIds.inputAdd);
	// 	expect(component).toHaveAttribute('disabled');
	// });

	// for (const prop of ['base', 'gap', 'padding', 'classes']) {
	// 	it(`Correctly applies the \`${prop}\` prop`, () => {
	// 		const value = 'bg-green-500';
	// 		render(TreeView, { ...commonProps, [prop]: value });
	// 		const component = screen.getByTestId(testIds.root);
	// 		expect(component).toHaveClass(value);
	// 	});
	// }
});
