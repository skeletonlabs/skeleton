/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import { writable } from 'svelte/store';
import RadioGroup from '$lib/Radio/RadioGroup.svelte';

const testStore = writable(0);

describe('RadioGroup.svelte', () => {
	afterEach(() => cleanup());

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
