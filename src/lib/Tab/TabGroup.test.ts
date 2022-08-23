import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable, type Writable } from 'svelte/store';

// @ts-ignore
import TabGroup from '$lib/Tab/TabGroup.svelte';

export let selected: Writable<any> = writable(0);

describe('TabGroup.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(TabGroup, {
			props: {
				selected
			}
		});
		expect(getByTestId('tab-group')).toBeTruthy();
	});
});
