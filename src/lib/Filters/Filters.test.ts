
/**
 * @vitest-environment jsdom
 */

 import { cleanup, render, screen } from '@testing-library/svelte';
 import { afterEach, describe, it, expect, vi } from 'vitest';


 import Emerald from '$lib/Filters/Emerald.svelte';
 import BlueNight from '$lib/Filters/BlueNight.svelte';
 import XPro from '$lib/Filters/XPro.svelte';
 import Summer84 from '$lib/Filters/Summer84.svelte';
 import Avatar from '$lib/Avatar/Avatar.svelte';
 
 describe('Filter.svelte', () => {
     
    afterEach(() => cleanup());

    it('Class hidden', async ()=>{
        render(Emerald);
        render(BlueNight);
        render(XPro);
        render(Summer84);
        let elements = document.getElementsByClassName('filter');
        expect(elements.length).eq(4);
        for(let i = 0; i < elements.length; ++i) {
            expect(elements[i].getAttribute('class').includes('hidden'));    
        }
    })

    it('Actions: Filter', async ()=>{
        
    })

 });