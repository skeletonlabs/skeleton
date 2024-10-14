import { fireEvent, screen, render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import RecursiveTreeView from '$lib/components/TreeView/RecursiveTreeView.svelte';
import { tick } from 'svelte';
import { get, writable, type Writable } from 'svelte/store';

const nodesA = [
	{
		id: 'A',
		content: 'A',
		value: 'A',
		children: [
			{ id: 'A1', content: 'A1', value: 'A1' },
			{ id: 'A2', content: 'A2', value: 'A2' },
			{
				id: 'A3',
				content: 'A3',
				value: 'A3',
				children: [
					{ id: 'A3i', content: 'A3i', value: 'A3i' },
					{ id: 'A3ii', content: 'A3ii', value: 'A3ii' },
					{ id: 'A3iii', content: 'A3iii', value: 'A3iii' }
				]
			}
		]
	}
];
const nodesB = [
	{
		id: 'B',
		content: 'B',
		value: 'B',
		children: [
			{ id: 'B1', content: 'B1', value: 'B1' },
			{ id: 'B2', content: 'B2', value: 'B2' },
			{ id: 'B3', content: 'B3', value: 'B3' }
		]
	}
];

describe('RecursiveTreeView.svelte', () => {
	it('updates checkedNodes state', async () => {
		let checkedNodes: string[] = [];
		const { component } = render(RecursiveTreeView, {
			props: {
				nodes: nodesA,
				checkedNodes: checkedNodes,
				selection: true,
				multiple: true,
				relational: true
			}
		});
		await tick();
		const checkBox1 = screen.getByDisplayValue('A3i') as HTMLInputElement;
		const checkBox2 = screen.getByDisplayValue('A3iii') as HTMLInputElement;
		await fireEvent.click(checkBox1);
		await fireEvent.click(checkBox2);
		await tick();
		expect(component.checkedNodes).toEqual(['A3i', 'A3iii']);
	});

	it('maintains checkedNodes state when nodes is changed, as during pagination', async () => {
		let checkedNodes: string[] = [];
		let checkedStore: string[] = [];
		const { component } = render(RecursiveTreeView, {
			props: {
				nodes: nodesA,
				checkedNodes: checkedNodes,
				selection: true,
				multiple: true,
				relational: true
			}
		});
		await tick();
		const checkBox1 = screen.getByDisplayValue('A3i') as HTMLInputElement;
		const checkBox2 = screen.getByDisplayValue('A3iii') as HTMLInputElement;
		await fireEvent.click(checkBox1);
		await fireEvent.click(checkBox2);
		await tick();
		checkedStore = [...checkedNodes];
		component.$set({ nodes: nodesB });
		await tick();
		component.$set({ nodes: nodesA });
		await tick();
		component.$set({ checkedNodes: checkedStore.concat(checkedNodes) });
		await tick();
		expect(component.checkedNodes).toEqual(['A3i', 'A3iii']);
	});

	it('is possible to change nodes, then click a node', async () => {
		let checkedNodes: string[] = [];
		let checkedStore: string[] = [];
		const { component } = render(RecursiveTreeView, {
			props: {
				nodes: nodesA,
				checkedNodes: checkedNodes,
				selection: true,
				multiple: true,
				relational: true
			}
		});
		await tick();
		component.$set({ nodes: nodesB });
		await tick();
		component.$set({ nodes: nodesA });
		await tick();
		const checkBox = screen.getByDisplayValue('A3i') as HTMLInputElement;
		await fireEvent.click(checkBox);
		await tick();
		expect(component.checkedNodes).toEqual(['A3i']);
	});

	it('is possible to change nodes, then click a node which has recursive siblings', async () => {
		let checkedNodes: string[] = [];
		let checkedStore: string[] = [];
		const { component } = render(RecursiveTreeView, {
			props: {
				nodes: nodesA,
				checkedNodes: checkedNodes,
				selection: true,
				multiple: true,
				relational: true
			}
		});
		await tick();
		component.$set({ nodes: nodesB });
		await tick();
		component.$set({ nodes: nodesA });
		await tick();
		const checkBox = screen.getByDisplayValue('A3') as HTMLInputElement;
		await fireEvent.click(checkBox);
		await tick();
		expect(component.checkedNodes).toEqual(['A3']);
	});
});
