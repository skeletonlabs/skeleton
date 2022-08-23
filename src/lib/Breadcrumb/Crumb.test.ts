import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Crumb from '$lib/Breadcrumb/Crumb.svelte';

describe('Crumb.svelte', () => {
	it('Renders without props', async () => {
		const { getByTestId } = render(Crumb);
		expect(getByTestId('crumb')).toBeTruthy();
	});

	it('Renders with props', () => {
		const { getByTestId } = render(Crumb, { href: '/', current: true });
		expect(getByTestId('crumb')).toBeTruthy();
	});
});
