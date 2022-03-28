
/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, it, expect } from 'vitest';

 import Emerald from '$lib/Filters/svg/Emerald.svelte';
 import BlueNight from '$lib/Filters/svg/BlueNight.svelte';
 import XPro from '$lib/Filters/svg/XPro.svelte';
 import Summer84 from '$lib/Filters/svg/Summer84.svelte';
 import Rustic from '$lib/Filters/svg/Rustic.svelte';
 import Nineties from '$lib/Filters/svg/Nineties.svelte';

 import {filter} from '$lib/Filters/filter';
 
 describe('Filter.svelte', () => {
     
    afterEach(() => cleanup());

    it('Class hidden', async ()=>{
        render(Emerald);
        render(BlueNight);
        render(XPro);
        render(Summer84);
        render(Rustic);
        render(Nineties);
        let elements = document.getElementsByClassName('filter');
        for(let i = 0; i < elements.length; ++i) {
            expect(elements[i].getAttribute('class').includes('hidden'));    
        }
    })

    it('Actions: Filter', async ()=>{
        const elem = document.createElement('div');
        filter(elem, 'XPro');
        expect(elem.getAttribute('style').includes('filter: url("#Emerald")'));
    })

 });