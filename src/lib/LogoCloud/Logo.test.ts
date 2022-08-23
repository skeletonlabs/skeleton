import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Logo from '$lib/LogoCloud/Logo.svelte';

describe('Logo.svelte', () => {
	it('Renders', async () => {
		const { getByTestId } = render(Logo);
		expect(getByTestId('logo')).toBeTruthy();
	});
});
