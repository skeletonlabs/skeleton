import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Logo from '$lib/components/LogoCloud/Logo.svelte';

describe('Logo.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Logo);
		expect(getByTestId('logo')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Logo, {
			props: {
				background: 'bg-surface-300 dark:bg-surface-800',
				color: 'text-black dark:text-white',
				text: 'text-base font-bold',
				padding: 'py-4 md:py-10'
			}
		});
		expect(getByTestId('logo')).toBeTruthy();
	});
});
