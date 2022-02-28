/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it } from 'vitest';

// @ts-ignore
import DataTable from '$lib/_DataTable/DataTable.svelte';

describe('DataTable.svelte', () => {
	afterEach(() => cleanup());

	it('Renders', async () => {
		render(DataTable);
	});
});
