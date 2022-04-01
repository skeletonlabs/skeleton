/**
 * @vitest-environment jsdom
 */

 import { cleanup, render, fireEvent } from '@testing-library/svelte';
 import { afterEach, describe, it, expect } from 'vitest';
 import { writable } from 'svelte/store';
 import ListItem from '$lib/List/ListItem.svelte'
 
 let htmlIcon = '<button class="iconClass">Hello Test!</button>'

 describe('ListGroupItem.svelte', () => {
 
     afterEach(() => cleanup());
 
     it('Renders without props', async () => {
         const {getByTestId} = render(ListItem);
         expect(getByTestId('listItem')).toBeTruthy();
     });

     it('Renders with props (slot)', async()=>{
        const {getByTestId} = render(ListItem, {props: { icon: htmlIcon}});
        const slotElem = getByTestId('listItem').getElementsByClassName('iconClass');
        expect(slotElem.length > 0);
     })

     it('Selectable (single) Context', async ()=>{
         let svelteStore = writable('');
         const {getByTestId} = render(ListItem, {selectable: true, active: svelteStore});
         const elements = getByTestId('listItem').getElementsByTagName('input');
         expect(elements.length).eq(1);
         expect(elements[0].getAttribute('type')).eq('radio');
     })

     it('Selectable (single) Set Active', async ()=>{
        let svelteStore = writable('');
        const {getByTestId} = render(ListItem, {selectable: true, active: svelteStore, value: '&test'});
        const elements = getByTestId('listItem').getElementsByTagName('input');
        await fireEvent.click(elements[0]);
        svelteStore.subscribe((val)=>{expect(val == '&test')});
     })

     it('Selectable (multi) Set Active', async ()=>{
        let svelteStore = writable([]);
        const {getByTestId} = render(ListItem, {selectable: true, active: svelteStore, value: '&test', multiselect: true});
        const elements = getByTestId('listItem').getElementsByTagName('input');
        await fireEvent.click(elements[0]);
        svelteStore.subscribe((val)=>{expect(val.includes('&test'))});
     })
 });