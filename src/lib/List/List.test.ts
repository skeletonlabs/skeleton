/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';
import { writable } from 'svelte/store';

import List from '$lib/List/List.svelte'
 
describe('ListGroupItem.svelte', () => {

    afterEach(() => cleanup());

    it('Renders without props', async () => {
        const {getByTestId} = render(List);
        expect(getByTestId('list-group')).toBeTruthy();
    });

    // Standard Lists

    it('Renders ul list', async()=>{
        const {getByTestId} = render(List, {props: { role: 'ul' }});
        const element = getByTestId('list-group');
        expect(element).toBeTruthy();
    });
    
    it('Renders ol list', async()=>{
        const {getByTestId} = render(List, {props: { role: 'ol' }});
        const element = getByTestId('list-group');
        expect(element).toBeTruthy();
    });
    
    it('Renders dl list', async()=>{
        const {getByTestId} = render(List, {props: { role: 'dl' }});
        const element = getByTestId('list-group');
        expect(element).toBeTruthy();
    });

    // Nav & Selection

    it('Renders nav a if selected is single value', async ()=>{
        const {getByTestId} = render(List, { role:'nav', selected: writable('') });
        const element = getByTestId('nav-item');
        expect(element).toBeTruthy();
    })

    it('Renders nav a if selected has multiple values', async ()=>{
        const {getByTestId} = render(List, { role:'nav', selected: writable([]) });
        const element = getByTestId('nav-item');
        expect(element).toBeTruthy();
    })

});