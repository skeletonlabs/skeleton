/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import Divider from '$lib/Divider/Divider.svelte';

describe('Divider.svelte', () => {
	afterEach(() => cleanup());

	it('Renders with props', async () => {
		const { getByTestId } = render(Divider, {
			props: { weight: '2', display: 'dotted', orientation: 'h' }
		});
		expect(getByTestId('divider')).toBeTruthy();
	});

	it('Renders without props (Defaults)', async () => {
		const { getByTestId } = render(Divider);
		expect(getByTestId('divider')).toBeTruthy();
		expect(getByTestId('divider').className).toContain('border-solid')
		expect(getByTestId('divider').className).toContain('border-t')
	});
});
