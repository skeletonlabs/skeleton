import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import AppRailTile from '$lib/components/AppRail/AppRailTile.svelte';
import { readable } from 'svelte/store';

describe('AppRailTile.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(AppRailTile);
		expect(getByTestId('app-rail-tile')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(AppRailTile, {
			props: {
				value: 'TestAppRailTile',
				tag: 'button',
				label: 'TestAppRailTile',
				regionIcon: 'TestAppRailTile',
				regionLabel: 'TestAppRailTile',
				selected: readable('/'),
				active: 'bg-primary-500',
				hover: 'bg-primary-500',
				group: 'testGroup',
				name: 'test'
			}
		});
		expect(getByTestId('app-rail-tile')).toBeTruthy();
	});

	it('Overrides tag when href is passed', async () => {
		const { getByTestId } = render(AppRailTile, {
			props: {
				href: '/about',
				group: 'testGroup',
				name: 'test tile',
				value: 'some value'
			}
		});
		expect(getByTestId('app-rail-tile').querySelector('a')).toBeTruthy();
	});
});
