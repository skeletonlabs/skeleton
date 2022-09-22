import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import LogoCloud from '$lib/components/LogoCloud/LogoCloud.svelte';

describe('LogoCloud.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(LogoCloud);
		expect(getByTestId('logo-cloud')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(LogoCloud, {
			props: {
				gridCols: 'md:grid-cols-1',
				gridGap: 'gap-1',
				rounded: 'rounded-lg',
				// Props (Logo)
				background: 'bg-surface-300 dark:bg-surface-800',
				color: 'text-black dark:text-white',
				text: 'text-base font-bold',
				padding: 'py-4 md:py-10'
			}
		});
		expect(getByTestId('logo-cloud')).toBeTruthy();
	});
});
