import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Breadcrumb from '$lib/Breadcrumb/Breadcrumb.svelte';

describe('Breadcrumb.svelte', () => {
	it('Renders without props', async () => {
		const { getByTestId } = render(Breadcrumb);
		expect(getByTestId('breadcrumb')).toBeTruthy();
	});

	it('Renders with props', () => {
	    const { getByTestId } = render(Breadcrumb, {
	        props: {display: 'outlined', color: 'primary', separator: '|'},
	    });
	    expect(getByTestId('breadcrumb')).toBeTruthy();
	});
});
