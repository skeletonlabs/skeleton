/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it } from 'vitest';

import Logo from '$lib/LogoCloud/Logo.svelte';

describe('Logo.svelte', () => {

	afterEach(() => cleanup());

	it('Renders', async () => {
		render(Logo);
	});

	it('Slotted Icon', async ()=>{		
		// Unsure if testing slots is possible yet
	})

	it('Slotted Label', async ()=>{
		// Unsure if testing slots is possible yet
	})

	it('Icon and label', async ()=>{
		// Unsure if testing slots is possible yet
	})
});
