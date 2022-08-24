import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Breadcrumb from '$lib/Breadcrumb/Breadcrumb.svelte';

describe('Breadcrumb.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Breadcrumb);
		expect(getByTestId('breadcrumb')).toBeTruthy();
	});

	it('Renders with all props', () => {
	    const { getByTestId } = render(Breadcrumb, {
	        props: {
				separator: '|',
				label: 'Test Divider'
			},
	    });
	    expect(getByTestId('breadcrumb')).toBeTruthy();
	});
});
