/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import TabGroup from '$lib/Tab/TabGroup.svelte';

describe('TabGroup.svelte', () => {
	afterEach(() => cleanup());

	it('Renders without props', async () => {
		const { getByTestId } = render(TabGroup);
		expect(getByTestId('tab-group')).toBeTruthy();
	});
});
