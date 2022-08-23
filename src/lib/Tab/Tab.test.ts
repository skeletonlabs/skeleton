import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Tab from '$lib/Tab/Tab.svelte';

describe('Tab.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Tab, { props: { value: 'test' } });
		expect(getByTestId('tab')).toBeTruthy();
	});
});
