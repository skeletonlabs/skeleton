import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import LightSwitch from '$lib/LightSwitch/LightSwitch.svelte';

describe.skip('LightSwitch.svelte', () => {
	it('Renders without props', async () => {
		const { getByTestId } = render(LightSwitch);
		expect(getByTestId('menu-wrapper')).toBeTruthy();
	});
});
