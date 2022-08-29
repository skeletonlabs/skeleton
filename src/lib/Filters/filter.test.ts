import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Emerald from '$lib/Filters/svg/Emerald.svelte';
import BlueNight from '$lib/Filters/svg/BlueNight.svelte';
import XPro from '$lib/Filters/svg/XPro.svelte';
import Summer84 from '$lib/Filters/svg/Summer84.svelte';
import Rustic from '$lib/Filters/svg/Rustic.svelte';
import Apollo from '$lib/Filters/svg/Apollo.svelte';
import GreenFall from '$lib/Filters/svg/GreenFall.svelte';
import Noir from '$lib/Filters/svg/Noir.svelte';
import NoirLight from '$lib/Filters/svg/NoirLight.svelte';

import { filter } from '$lib/Filters/filter';

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
