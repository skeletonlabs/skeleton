import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Tree from '$lib/components/TreeView/TreeView.svelte';

describe('Tree.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Tree);
		expect(getByTestId('tree')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Tree, {
			props: {
				width: 'w-full',
				spacing: 'space-y-1',
				padding: 'py-4',
				indent: 'ml-4',
				hover: 'hover:variant-soft',
				rounded: 'rounded-container-token',
				caretOpen: 'rotate-180',
				caretClosed: 'rotate-90',
				regionSummary: 'bg-red-600',
				regionCaret: 'bg-red-600',
				regionChildren: 'bg-red-600',
				labelledby: 'tree label'
			}
		});
		expect(getByTestId('tree')).toBeTruthy();
	});
});
