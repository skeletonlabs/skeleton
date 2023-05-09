import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import HorizontalAppRail from '$lib/components/AppRail/HorizontalAppRail.svelte';
import { readable } from 'svelte/store';

describe('AppRail.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(HorizontalAppRail);
		expect(getByTestId('horizontal-app-rail')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(HorizontalAppRail, {
			props: {
				selected: readable('/'),
				background: 'bg-primary-500',
				border: 'border-primary-500',
				active: 'bg-primary-500',
				hover: 'bg-primary-500',
				width: 'w-20',
				height: 'h-20',
				gap: 'gap-0',
				regionLead: 'p-1',
				regionDefault: 'p-1',
				regionTrail: 'p-1'
			}
		});
		expect(getByTestId('horizontal-app-rail')).toBeTruthy();
	});
});
