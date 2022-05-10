/**
 * @vitest-environment jsdom
 */

 import { cleanup, render, screen } from '@testing-library/svelte';
 import { afterEach, describe, expect, it, test, vi } from 'vitest';
 import Accordion from '$lib/Accordion/Accordion.svelte';
 
 describe('Accordion.svelte', () => {
     afterEach(() => cleanup());
 
     it('Renders without props', async () => {
        const { getByTestId } = render(Accordion);
		expect(getByTestId('alert')).toBeTruthy();
     });

     it('Renders with props', async () => {
        
     });
 
 });