/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import Logo from '$lib/LogoCloud/Logo.svelte';
import { SvelteComponent } from 'svelte';

describe('Logo.svelte', () => {
	afterEach(() => cleanup());

	it('Renders', async () => {
		const { getByTestId } = render(Logo);
		expect(getByTestId('logo')).toBeTruthy();
	});

	// it('Slotted Icon', async () => {
	// 	// Unsure if testing slots is possible yet
	// });

	// it('Slotted Label', async () => {
	// 	// Unsure if testing slots is possible yet
	// });

	// it('Icon and label', async () => {
	// 	// Unsure if testing slots is possible yet
	// });
});
