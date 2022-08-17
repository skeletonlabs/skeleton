/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import Tab from '$lib/Tab/Tab.svelte';

describe('Tab.svelte', () => {
	afterEach(() => cleanup());

	it('Renders without props', async () => {
		const { getByTestId } = render(Tab, { props: { value: 'test' } });
		expect(getByTestId('tab')).toBeTruthy();
	});
});
