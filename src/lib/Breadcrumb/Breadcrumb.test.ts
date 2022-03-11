/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import Breadcrumb from '$lib/Breadcrumb/Breadcrumb.svelte';
import { fireEvent } from '@testing-library/dom';

const items = [
    {text: 'Main', icon: 'X', link: '/test', disabled: false},
    {text: 'Helm', icon: 'V', link: '/test', disabled: false},
]

describe('Breadcrumb.svelte', () => {

    afterEach(() => cleanup());

    it('Renders', async () => {
        render(Breadcrumb);
    });
    
    it('All paths shown', async() =>{
        const instance = render(Breadcrumb, {items: items});
        const parts = screen.getAllByTestId('breadcrumb');
        expect(parts.length).eq(items.length);
        expect(parts[0].innerHTML).eq(items[0].text);
    })
    
    it('Onclick routes', async () =>{
        const instance = render(Breadcrumb, {items: items});
        const parts = screen.getAllByTestId('breadcrumb');
        fireEvent.click(parts[0]);
        expect(location.pathname).contain(parts[0].getAttribute('href'));
    })
    
    it('Icon shown', async () =>{})
    
    it('Last inactive', async () =>{})
});