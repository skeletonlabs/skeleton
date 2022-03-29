/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import LogoCloud from '$lib/LogoCloud/LogoCloud.svelte';
import Logo from '$lib/LogoCloud/Logo.svelte';

describe('LogoCloud.svelte', () => {
	afterEach(() => cleanup());

	it('Renders', async () => {
		const { getByTestId } = render(LogoCloud);
		expect(getByTestId('cloud')).toBeTruthy();
	});

	// it('Test Slotted Content', async () => {
	// 	// Unsure if this is possible yet
	// });
});
