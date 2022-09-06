import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import LogoCloud from '$lib/LogoCloud/LogoCloud.svelte';

describe('LogoCloud.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(LogoCloud);
		expect(getByTestId('logo-cloud')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(LogoCloud, {
			props: {
				background: 'bg-primary-500',
				color: 'text-white',
				text: 'text-base font-bold'
			}
		});
		expect(getByTestId('logo-cloud')).toBeTruthy();
	});
});
