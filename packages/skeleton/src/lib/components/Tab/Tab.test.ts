import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Tab from '$lib/components/Tab/Tab.svelte';

describe('Tab.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Tab, {
			props: {
				group: 'testGroup',
				name: 'testName',
				value: 'testValue'
			}
		});
		expect(getByTestId('tab')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Tab, {
			props: {
				group: 'testGroup',
				name: 'testName',
				value: 'testValue',
				// ---
				borderWidth: 'border-b-2',
				borderColor: 'border-primary-500',
				color: 'text-primary-500',
				fill: 'fill-primary-500'
			}
		});
		expect(getByTestId('tab')).toBeTruthy();
	});
});
