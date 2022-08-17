/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import LogoCloud from '$lib/LogoCloud/LogoCloud.svelte';

describe('LogoCloud.svelte', () => {
	afterEach(() => cleanup());

	it('Renders', async () => {
		const { getByTestId } = render(LogoCloud);
		expect(getByTestId('logo-cloud')).toBeTruthy();
	});
});
