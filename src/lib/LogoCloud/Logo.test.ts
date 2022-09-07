import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Logo from '$lib/LogoCloud/Logo.svelte';

describe('Logo.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Logo);
		expect(getByTestId('logo')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Logo, {
			props: {
				background: 'bg-primary-500',
				color: 'text-white',
				text: 'text-base font-bold'
			}
		});
		expect(getByTestId('logo')).toBeTruthy();
	});
});
