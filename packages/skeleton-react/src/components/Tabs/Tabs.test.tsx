import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Tabs } from './Tabs.js';

// Tabs (integration)

describe('<Tabs>', () => {
	it('should render the entire component group', () => {
		const { getByTestId, getAllByTestId } = render(
			<Tabs value="testGroup">
				<Tabs.List>
					<Tabs.Control value="item-1">Control-1</Tabs.Control>
					<Tabs.Control value="item-2">Control-2</Tabs.Control>
				</Tabs.List>
				<Tabs.Content>
					<Tabs.Panel value="item-1">Panel-1</Tabs.Panel>
					<Tabs.Panel value="item-2">Panel-2</Tabs.Panel>
				</Tabs.Content>
			</Tabs>,
		);

		const componentRoot = getByTestId('tabs');
		const componentList = getByTestId('tabs-list');
		const componentControls = getAllByTestId('tabs-control');
		const componentContent = getByTestId('tabs-content');
		const componentPanel = getAllByTestId('tabs-panel');

		expect(componentRoot).toBeInTheDocument();
		expect(componentList).toBeInTheDocument();
		expect(componentControls[0]).toBeInTheDocument();
		expect(componentContent).toBeInTheDocument();
		expect(componentPanel[0]).toBeInTheDocument();
	});
});

// Tabs ---

describe('<Tabs>', () => {
	it('should render base classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(
			<Tabs value="testGroup" base={testClass}>
				Test
			</Tabs>,
		);
		const component = getByTestId('tabs');
		expect(component).toHaveClass(testClass);
	});

	it('should render arbitrary classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(
			<Tabs value="testGroup" classes={testClass}>
				Test
			</Tabs>,
		);
		const component = getByTestId('tabs');
		expect(component).toHaveClass(testClass);
	});
});

describe('<Tabs.Control>', () => {
	it('should render custom child content', () => {
		const testContent = 'someTextContent';
		const { getByTestId } = render(
			<Tabs value="testGroup">
				<Tabs.List>
					<Tabs.Control value="item-1">{testContent}</Tabs.Control>
				</Tabs.List>
			</Tabs>,
		);
		const componentControl = getByTestId('tabs-control');
		expect(componentControl).toHaveTextContent(testContent);
	});

	it('should render base classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(
			<Tabs value="testGroup">
				<Tabs.List>
					<Tabs.Control value="item-1" base={testClass}>
						Test
					</Tabs.Control>
				</Tabs.List>
			</Tabs>,
		);
		const component = getByTestId('tabs-control');
		expect(component).toHaveClass(testClass);
	});

	it('should render arbitrary classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(
			<Tabs value="testGroup">
				<Tabs.List>
					<Tabs.Control value="item-1" classes={testClass}>
						Test
					</Tabs.Control>
				</Tabs.List>
			</Tabs>,
		);
		const component = getByTestId('tabs-control');
		expect(component).toHaveClass(testClass);
	});
});

describe('<Tabs.Panel>', () => {
	it('should render custom child content', () => {
		const testContent = 'someTextContent';
		const { getByTestId } = render(
			<Tabs value="testGroup">
				<Tabs.Content>
					<Tabs.Panel value="item-1">{testContent}</Tabs.Panel>
				</Tabs.Content>
			</Tabs>,
		);
		const componentControl = getByTestId('tabs-panel');
		expect(componentControl).toHaveTextContent(testContent);
	});

	it('should render base classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(
			<Tabs value="testGroup">
				<Tabs.Content>
					<Tabs.Panel value="item-1" base={testClass}>
						Test
					</Tabs.Panel>
				</Tabs.Content>
			</Tabs>,
		);
		const component = getByTestId('tabs-panel');
		expect(component).toHaveClass(testClass);
	});

	it('should render arbitrary classes on root', () => {
		const testClass = 'bg-green-500';
		const { getByTestId } = render(
			<Tabs value="testGroup">
				<Tabs.Content>
					<Tabs.Panel value="item-1" classes={testClass}>
						Test
					</Tabs.Panel>
				</Tabs.Content>
			</Tabs>,
		);
		const component = getByTestId('tabs-panel');
		expect(component).toHaveClass(testClass);
	});
});
