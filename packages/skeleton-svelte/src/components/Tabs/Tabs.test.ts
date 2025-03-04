import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { mockSnippet } from '../../internal/test-utils.js';
import { Tabs } from '../../index.js';
import TabsTest from './Tabs.test.svelte';

describe('Tabs', () => {
	const testIds = {
		root: 'tabs',
		list: 'tabs-list',
		content: 'tabs-content',
	};

	it('Renders the component', () => {
		render(Tabs, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Tabs, { [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}

	it('Should render all snippets', () => {
		render(Tabs, { list: mockSnippet('listSnippet'), content: mockSnippet('contentSnippet') });
		const componentList = screen.getByTestId(testIds.list);
		const componentContent = screen.getByTestId(testIds.content);
		expect(componentList).toHaveTextContent('listSnippet');
		expect(componentContent).toHaveTextContent('contentSnippet');
	});
});

describe('Tabs.Control', () => {
	const testIds = {
		root: 'tabs-control',
	};

	it('Renders the item', () => {
		render(TabsTest, {});
		const component = screen.getAllByTestId(testIds.root)[0];
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'padding', 'translateX', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(TabsTest, { controlProps: { [prop]: value } });
			const component = screen.getAllByTestId(testIds.root)[0];
			expect(component).toHaveClass(value);
		});
	}
});

describe('Tabs.Panel', () => {
	const testIds = {
		root: 'tabs-panel',
	};

	it('Renders the item', () => {
		render(TabsTest, {});
		const component = screen.getAllByTestId(testIds.root)[0];
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(TabsTest, { panelProps: { [prop]: value } });
			const component = screen.getAllByTestId(testIds.root)[0];
			expect(component).toHaveClass(value);
		});
	}
});
