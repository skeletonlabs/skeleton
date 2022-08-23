import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import TabGroup from '$lib/Tab/TabGroup.svelte';

describe('TabGroup.svelte', () => {
	it('Renders without props', async () => {
		const { getByTestId } = render(TabGroup);
		expect(getByTestId('tab-group')).toBeTruthy();
	});
});
