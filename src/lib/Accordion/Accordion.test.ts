/**
 * @vitest-environment jsdom
 */

 import { cleanup, render, screen } from '@testing-library/svelte';
 import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
 import Accordion from '$lib/Accordion/Accordion.svelte';
 import AccordionGroup from '$lib/Accordion/AccordionGroup.svelte';


 import type { Writable } from "svelte/store";
 export let selected: Writable<any>;

 describe('Accordion.svelte', () => {
     afterEach(() => cleanup());
 
     it('Renders without props', async () => {
        render(AccordionGroup);
        const { getByTestId } = render(Accordion);
		expect(getByTestId('accordion')).toBeTruthy();
     });

     it('Renders with props', async () => {
        const { getByTestId } = render(Accordion);
		expect(getByTestId('accordion')).toBeTruthy();
     });
 
 });