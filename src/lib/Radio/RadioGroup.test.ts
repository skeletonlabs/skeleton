import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

// @ts-ignore
import RadioGroup from '$lib/Radio/RadioGroup.svelte';

const testStore = writable(0);

describe('RadioGroup.svelte', () => {
	it('Renders without props', async () => {
		const { getByTestId } = render(RadioGroup);
		expect(getByTestId('radio-group')).toBeTruthy();
	});

	it('Renders with props', () => {
		const { getByTestId } = render(RadioGroup, {
			props: { active: testStore, background: 'bg-warning-500', color: 'text-white' }
		});
		expect(getByTestId('radio-group')).toBeTruthy();
	});
});
