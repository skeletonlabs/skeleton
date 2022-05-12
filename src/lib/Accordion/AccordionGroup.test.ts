import { writable } from 'svelte/store';
/**
 * @vitest-environment jsdom
 */

 import { cleanup, render, screen } from '@testing-library/svelte';
 import { afterEach, describe, expect, it, test, vi } from 'vitest';
 import AccordionGroup from '$lib/Accordion/AccordionGroup.svelte';
 
 let selected = writable(0);
 
 describe('Accordion.svelte', () => {
     afterEach(() => cleanup());
 
     it('Renders without props', async () => {
        const { getByTestId } = render(AccordionGroup);
		expect(getByTestId('accordion-group')).toBeTruthy();
     });

     it('Renders with props', async () => {
        const { getByTestId } = render(AccordionGroup, {multiple: true, active: {selected}, spacing: 'space-y-4'});
		expect(getByTestId('accordion-group')).toBeTruthy();
     });
 
 });