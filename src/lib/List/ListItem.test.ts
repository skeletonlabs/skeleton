/**
 * @vitest-environment jsdom
 */

import { cleanup, render, fireEvent } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';
import { writable } from 'svelte/store';

import ListItem from '$lib/List/ListItem.svelte'
 
describe('ListGroupItem.svelte', () => {

    afterEach(() => cleanup());

    it('Renders without props', async () => {
        const {getByTestId} = render(ListItem);
        expect(getByTestId('list-item')).toBeTruthy();
    });

    it('Renders with props (slot)', async()=>{
        const {getByTestId} = render(ListItem, {props: { spacing: 'dense' }});
        const element = getByTestId('list-item');
        expect(element).toBeTruthy();
    })

    // TODO: ensure this renders as an <a> tag
    it('Renders nav a if selected is single value', async ()=>{
        const {getByTestId} = render(ListItem, { role: 'nav', selected: writable('') });
        const element = getByTestId('list-item');
        expect(element).toBeTruthy();
    })

    // TODO: ensure this renders as an <a> tag
    it('Renders nav a if selected has multiple values', async ()=>{
        const {getByTestId} = render(ListItem, { role: 'nav', selected: writable([]) });
        const element = getByTestId('list-item');
        expect(element).toBeTruthy();
    })

    // TODO: test other types of list items
});