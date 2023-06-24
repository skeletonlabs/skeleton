import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import TreeItem from '$lib/components/TreeView/TreeViewItem.svelte';

describe('TreeItem.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(TreeItem);
		expect(getByTestId('tree-item')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(TreeItem, {
			props: {
				open: true,
				padding: 'py-4',
				indent: 'ml-4',
				hover: 'hover:variant-soft',
				rounded: 'rounded-container-token',
				caretOpen: 'rotate-180',
				caretClosed: 'rotate-90',
				regionSummary: 'bg-red-600',
				regionCaret: 'bg-red-600',
				regionChildren: 'bg-red-600'
			}
		});
		expect(getByTestId('tree-item')).toBeTruthy();
	});
});
