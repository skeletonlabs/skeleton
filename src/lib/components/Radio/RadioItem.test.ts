import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import RadioItem from '$lib/components/Radio/RadioItem.svelte';

describe('RadioItem.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(RadioItem, {
			group: 'testGroup',
			name: 'testName',
			value: 'testValue'
		});
		expect(getByTestId('radio-item')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(RadioItem, {
			props: {
				group: 'testGroup',
				name: 'testName',
				value: 'testValue',
				label: 'testLabel'
			}
		});
		expect(getByTestId('radio-item')).toBeTruthy();
	});
});
