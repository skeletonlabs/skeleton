import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import AppRail from '$lib/components/AppRail/AppRail.svelte';
import { readable } from 'svelte/store';

describe('AppRail.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(AppRail);
		expect(getByTestId('app-rail')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(AppRail, {
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
		expect(getByTestId('app-rail')).toBeTruthy();
	});
});
