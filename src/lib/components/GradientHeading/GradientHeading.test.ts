import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import GradientHeading from '$lib/components/GradientHeading/GradientHeading.svelte';

describe('GradientHeading.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId }: { getByTestId: any } = render(GradientHeading, {
			props: { tag: 'h1' }
		});
		expect(getByTestId('gradient-heading')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId }: { getByTestId: any } = render(GradientHeading, {
			props: {
				tag: 'h1',
				direction: 'bg-gradient-to-r',
				from: 'from-primary-500',
				to: 'to-secondary-500'
			}
		});
		const elem: HTMLElement = getByTestId('gradient-heading');
		expect(elem).toBeTruthy();
		expect(elem.tagName).eq('H1');
		expect(elem.querySelector('span')?.className).includes('bg-gradient-to-r');
		expect(elem.querySelector('span')?.className).includes('from-primary-500');
		expect(elem.querySelector('span')?.className).includes('to-secondary-500');
	});
});
