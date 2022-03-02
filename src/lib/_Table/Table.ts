/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it } from 'vitest';

// @ts-ignore
import Table from '$lib/_Table/Table.svelte';

describe('Table.svelte', () => {
	afterEach(() => cleanup());

	it('Renders', async () => {
		render(Table);
	});
});
