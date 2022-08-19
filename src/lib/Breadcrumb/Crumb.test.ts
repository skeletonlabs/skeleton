/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import Crumb from '$lib/Breadcrumb/Crumb.svelte';

describe('Crumb.svelte', () => {
	afterEach(() => cleanup());

	it('Renders without props', async () => {
		const { getByTestId } = render(Crumb);
		expect(getByTestId('crumb')).toBeTruthy();
	});

	it('Renders with props', () => {
		const { getByTestId } = render(Crumb, { href: '/', current: true });
		expect(getByTestId('crumb')).toBeTruthy();
	});
});
