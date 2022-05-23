/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, expect, it } from 'vitest';
 
 import AccordionItem from '$lib/Accordion/AccordionItem.svelte';

 import { writable, type Writable } from "svelte/store";
 export let selected: Writable<number[]> = writable([1]);

 describe('AccordionItem.svelte', () => {
     afterEach(() => cleanup());

    it('placeholder', async () => {});

    it('Renders without props', async () => {
        const { getByTestId } = render(AccordionItem, {selected, value: 0, multiple: false});
        expect(getByTestId('accordion-item')).toBeTruthy();
    });

    it('Renders with props', async () => {
        const { getByTestId } = render(AccordionItem, {
            selected,
            multiple: false,
            value: 0,
            hover: 'bg-green-500/50',
            spacing: 'space-y-2',
            padding: 'p-4',
        });
        expect(getByTestId('accordion-item')).toBeTruthy();
    });
 
 });