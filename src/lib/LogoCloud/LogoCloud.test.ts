/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it } from 'vitest';

import LogoCloud from '$lib/LogoCloud/LogoCloud.svelte';
import Logo from '$lib/LogoCloud/Logo.svelte';

describe('LogoCloud.svelte', () => {

	afterEach(() => cleanup());

	it('Renders', async () => {
		render(LogoCloud);
	});

	it('Icon', ()=>{		
		// Discuss with Chris S
	})

	it('Label only', ()=>{
		// Discuss with Chris S
	})

	it('4+ content', ()=>{
		// Discuss with Chris S	
	})

});
