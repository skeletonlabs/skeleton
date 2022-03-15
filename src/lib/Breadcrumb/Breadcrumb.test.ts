/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import Breadcrumb from '$lib/Breadcrumb/Breadcrumb.svelte';
import { fireEvent } from '@testing-library/dom';

const items = [
    {text: 'Main', link: '/test', inactive: false},
    {text: 'Helm', link: '/test', inactive: false},
]

describe('Breadcrumb.svelte', () => {

    afterEach(() => cleanup());

    it('Renders', async () => {
        render(Breadcrumb);
    });
    
    it('All paths shown', async() =>{
        const instance = render(Breadcrumb, {items: items});
        const parts = screen.getAllByTestId('crumb');
        expect(parts.length).eq(items.length);
        expect(parts[0].innerHTML).eq(items[0].text);
    })
    
    it('Onclick routes', async () =>{
        const instance = render(Breadcrumb, {items: items});
        const parts = screen.getAllByTestId('crumb');
        await fireEvent.click(parts[0]);
        location.pathname = '/test';
        expect(location.pathname).contain(parts[0].getAttribute('href'));
    })
    
    it('Icon shown', async () =>{})
    
});