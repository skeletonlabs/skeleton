import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { filter } from '$lib/actions/Filters/filter';

import Emerald from '$lib/actions/Filters/svg/Emerald.svelte';
import BlueNight from '$lib/actions/Filters/svg/BlueNight.svelte';
import XPro from '$lib/actions/Filters/svg/XPro.svelte';
import Summer84 from '$lib/actions/Filters/svg/Summer84.svelte';
import Rustic from '$lib/actions/Filters/svg/Rustic.svelte';
import Apollo from '$lib/actions/Filters/svg/Apollo.svelte';
import GreenFall from '$lib/actions/Filters/svg/GreenFall.svelte';
import Noir from '$lib/actions/Filters/svg/Noir.svelte';
import NoirLight from '$lib/actions/Filters/svg/NoirLight.svelte';

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
		let elements: HTMLCollection = document.getElementsByClassName('filter');
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
