
/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import Breadcrumb from '$lib/Breadcrumb/Breadcrumb.svelte';
import Crumb from '$lib/Breadcrumb/Crumb.svelte';

const items = [
    {text: 'Main', link: '/test', inactive: false},
    {text: 'Helm', link: '/test', inactive: false},
]

describe('Breadcrumb.svelte', () => {

    afterEach(() => {cleanup(); localStorage.clear();});

    it('Renders', async () => {
        render(Breadcrumb);
    });
    
    // it('All paths shown', async() =>{
    //     const instance = render(Breadcrumb, {items: items});
    //     const parts = screen.getAllByTestId('crumb');
    //     expect(parts.length).eq(items.length);
    //     expect(parts[0].innerHTML).eq(items[0].text);
    // })
    
    // it('Href applied', async () =>{
    //     render(Breadcrumb, {items: items});
    //     const parts = screen.getAllByTestId('crumb');
    //     expect(items[0].link).eq(parts[0].getAttribute('href'));
    // })
    
    // it('Seperator applied after each', async ()=>{
    //     render(Breadcrumb, {items: items});
    //     const separator = screen.getAllByTestId('separator');
    //     expect(separator.length).eq(items.length - 1);
    // })

    // it('Nested Crumb components renders', async ()=>{
    //     // TODO - Figure out nested rendering
    // })

});