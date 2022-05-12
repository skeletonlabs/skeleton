/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, expect, it } from 'vitest';
 
 import AccordionItem from '$lib/Accordion/AccordionItem.svelte';
 import AccordionGroup from '$lib/Accordion/AccordionGroup.svelte';

 import type { Writable } from "svelte/store";
 export let selected: Writable<any>;

 describe('AccordionItem.svelte', () => {
     afterEach(() => cleanup());
 
     it('Renders without props', async () => {
        render(AccordionGroup);
        const { getByTestId } = render(AccordionItem);
		expect(getByTestId('accordion-item')).toBeTruthy();
     });

     it('Renders with props', async () => {
        const { getByTestId } = render(AccordionItem);
		expect(getByTestId('accordion-item')).toBeTruthy();
     });
 
 });