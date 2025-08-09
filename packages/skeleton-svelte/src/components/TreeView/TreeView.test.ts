import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import TreeViewTest from './TreeView.test.svelte';
import { mockSnippet } from '../../internal/test-utils.js';

describe('TreeView (template-driven)', () => {
	const testIds = {
		root: 'tree',
		branch: 'tree-branch',
		indicator: 'tree-indicator',
		branchIcon: 'tree-branch-icon',
		itemIcon: 'tree-item-icon',
		branchText: 'tree-branch-text',
		itemText: 'tree-item-text',
		control: 'tree-control',
		content: 'tree-content',
		item: 'tree-item'
	} as const;

	it('Renders the component', () => {
		render(TreeViewTest);
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it('should render with the indicator snippet', () => {
		const testValue = 'testIndicator';
		render(TreeViewTest, { indicator: mockSnippet(testValue) });
		const input = screen.getByTestId(testIds.indicator);
		expect(input).toHaveTextContent(testValue);
	});

	it('should render with the branchIcon snippet', () => {
		const testValue = 'testIcon';
		render(TreeViewTest, { branchIcon: mockSnippet(testValue) });
		const input = screen.getByTestId(testIds.branchIcon);
		expect(input).toHaveTextContent(testValue);
	});

	it('should render with the value/text of a branch', () => {
		const valueToTest = 'node_modules';
		render(TreeViewTest);
		const input = screen.getByTestId(testIds.branchText);
		expect(input).toHaveTextContent(valueToTest);
	});

	it('should render expanded with the itemIcon snippet', () => {
		const testValue = 'testIcon';
		render(TreeViewTest, { defaultExpandedValue: ['LEVEL_1'], itemIcon: mockSnippet(testValue) });
		const input = screen.getByTestId(testIds.itemIcon);
		expect(input).toHaveTextContent(testValue);
	});

	it('should render expanded with the value/text of an item', () => {
		const valueToTest = 'zag-js';
		render(TreeViewTest, { defaultExpandedValue: ['LEVEL_1'] });
		const input = screen.getByTestId(testIds.itemText);
		expect(input).toHaveTextContent(valueToTest);
	});

	const propMap = [
		{ testId: testIds.root, props: ['base', 'background', 'spaceY', 'border', 'padding', 'shadow', 'classes'] },
		{
			testId: testIds.control,
			props: ['controlBase', 'controlBackground', 'controlSpaceY', 'controlBorder', 'controlPadding', 'controlShadow', 'controlClasses']
		},
		{
			testId: testIds.content,
			props: ['contentBase', 'contentBackground', 'contentSpaceY', 'contentBorder', 'contentPadding', 'contentShadow', 'contentClasses']
		},
		{
			testId: testIds.item,
			props: ['itemBase', 'itemBackground', 'itemSpaceY', 'itemBorder', 'itemPadding', 'itemShadow', 'itemClasses']
		}
	];

	for (const item of propMap) {
		for (const prop of item.props) {
			it(`Correctly applies the ${prop} prop`, () => {
				const value = 'bg-green-500';
				render(TreeViewTest, { defaultExpandedValue: ['LEVEL_1'], [prop]: value });
				const component = screen.getByTestId(item.testId);
				expect(component).toHaveClass(value);
			});
		}
	}
});
