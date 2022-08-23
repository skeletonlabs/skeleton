import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import LogoCloud from '$lib/LogoCloud/LogoCloud.svelte';

describe('LogoCloud.svelte', () => {
	it('Renders', async () => {
		const { getByTestId } = render(LogoCloud);
		expect(getByTestId('logo-cloud')).toBeTruthy();
	});
});
