import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import TabsControl from './TabsControl.svelte';
import TabsPanel from './TabsPanel.svelte';


import { mockSnippet } from '../../internal/test-utils.js';
import Tabs from './index.js';

describe('Tabs', () => {
	const testIds = {
		root: 'tabs',
		list: 'tabs-list',
		content: 'tabs-content'
	};

	it('Renders the component', () => {
		render(Tabs, { value: 'tab1', onValueChange: () => {} });
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Tabs, { [prop]: value, value: 'tab1', onValueChange: () => {} });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}

	it('Should render all snippets', () => {
		render(Tabs, { list: mockSnippet('listSnippet'), content: mockSnippet('contentSnippet'), value: 'tab1', onValueChange: () => {} });
		const componentList = screen.getByTestId(testIds.list);
		const componentContent = screen.getByTestId(testIds.content);
		expect(componentList).toHaveTextContent('listSnippet');
		expect(componentContent).toHaveTextContent('contentSnippet');
	});
});

describe('Tabs.Control', () => {
	const testIds = {
		root: 'tabs-control'
	};

	it('Renders the item', () => {
		render(Tabs, {
			value: 'tab1',
			onValueChange: () => {},
			$$slots: {
				default: [
					() => ({
						component: TabsControl,
						props: { value: 'tab1', children: 'Tab 1' }
					}),
				],
			}
		});
		const component = screen.getAllByTestId(testIds.root)[0];
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'padding', 'translateX', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			render(Tabs, {
				value: 'tab1',
				onValueChange: () => {},
				$$slots: {
					default: [
						() => ({
							component: TabsControl,
							props: { [prop]: 'bg-green-500', value: 'tab1', children: 'Tab 1' }
						}),
					],
				}
			});
			const component = screen.getAllByTestId(testIds.root)[0];
			expect(component).toHaveClass('bg-green-500');
		});
	}
});

describe('Tabs.Panel', () => {
	const testIds = {
		root: 'tabs-panel'
	};

	it('Renders the item', () => {
		render(Tabs, {
			value: 'tab1',
			onValueChange: () => {},
			$$slots: {
				default: [
					() => ({
						component: TabsPanel,
						props: { value: 'tab1', children: 'Content 1' }
					}),
				],
			}
		});
		const component = screen.getAllByTestId(testIds.root)[0];
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			render(Tabs, {
				value: 'tab1',
				onValueChange: () => {},
				$$slots: {
					default: [
						() => ({
							component: TabsPanel,
							props: { [prop]: 'bg-green-500', value: 'tab1', children: 'Content 1' }
						}),
					],
				}
			});
			const component = screen.getAllByTestId(testIds.root)[0];
			expect(component).toHaveClass('bg-green-500');
		});
	}
});
