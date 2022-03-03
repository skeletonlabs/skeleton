/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it } from 'vitest';

import LogoCloud from '$lib/LogoCloud/LogoCloud.svelte';

describe('LogoCloud.svelte', () => {

	afterEach(() => cleanup());

	it('Renders', async () => {
		render(LogoCloud);
	});
});
