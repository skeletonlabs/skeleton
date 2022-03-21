
/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import Breadcrumb from '$lib/Breadcrumb/Breadcrumb.svelte';

const items = [
    {text: 'Main', href: '/test', inactive: false},
    {text: 'Helm', href: '/test', inactive: false},
]

describe('Breadcrumb.svelte', () => {

    afterEach(() => {cleanup(); localStorage.clear();});

    it('Renders', async () => {
        render(Breadcrumb);
    });

    // CHRIS: disabled until further review
    
    // it('All paths shown', async() =>{
    //     const instance = render(Breadcrumb, {items});
    //     const parts = screen.getAllByTestId('breadcrumb');
    //     expect(parts.length).eq(items.length);
    //     expect(parts[0].innerHTML).eq(items[0].text);
    // })
    
    // it('Href applied', async () =>{
    //     render(Breadcrumb, {items});
    //     const parts = screen.getAllByTestId('breadcrumb');
    //     expect(items[0].href).eq(parts[0].getAttribute('href'));
    // })
    
    // it('Seperator applied after each', async ()=>{
    //     render(Breadcrumb, {items});
    //     const separator = screen.getAllByTestId('separator');
    //     expect(separator.length).eq(items.length - 1);
    // })

});