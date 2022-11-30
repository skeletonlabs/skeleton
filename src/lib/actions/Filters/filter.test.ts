import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// Action
import { filter } from '$lib/actions/Filters/filter';

// SVG Filters
import Emerald from '$lib/actions/Filters/svg-filters/Emerald.svelte';
import BlueNight from '$lib/actions/Filters/svg-filters/BlueNight.svelte';
import XPro from '$lib/actions/Filters/svg-filters/XPro.svelte';
import Summer84 from '$lib/actions/Filters/svg-filters/Summer84.svelte';
import Rustic from '$lib/actions/Filters/svg-filters/Rustic.svelte';
import Apollo from '$lib/actions/Filters/svg-filters/Apollo.svelte';
import GreenFall from '$lib/actions/Filters/svg-filters/GreenFall.svelte';
import Noir from '$lib/actions/Filters/svg-filters/Noir.svelte';
import NoirLight from '$lib/actions/Filters/svg-filters/NoirLight.svelte';

describe('Actions: Filter', () => {
	it('Tests all SVGs have class of "filter"', async () => {
		render(Emerald);
		render(BlueNight);
		render(XPro);
		render(Summer84);
		render(Rustic);
		render(Apollo);
		render(GreenFall);
		render(NoirLight, Noir);
		const elements: HTMLCollection = document.getElementsByClassName('filter');
		for (let i = 0; i < elements.length; ++i) {
			const el: any = elements[i];
			expect(el.getAttribute('class').includes('filter'));
		}
	});

	it('Test the node gets the filter url', async () => {
		const elem: any = document.createElement('div');
		filter(elem, 'XPro');
		expect(elem.getAttribute('style').includes('filter: url("#Emerald")'));
	});
});
