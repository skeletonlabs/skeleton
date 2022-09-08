import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable, type Writable } from 'svelte/store';

import Drawer from '$lib/utilities/Drawer/Drawer.svelte';

const storeTest: Writable<boolean> = writable(true);

describe('Drawer.svelte', () => {
	it('Renders when draw opened', async () => {
		const { getByTestId } = render(Drawer, {
			props: {
				open: storeTest
			}
		});
		expect(getByTestId('drawer-backdrop')).toBeTruthy();
		expect(getByTestId('drawer')).toBeTruthy();
	});
});
