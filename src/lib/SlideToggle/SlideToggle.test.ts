/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, it } from 'vitest';
 
 // @ts-ignore
 import SliderToggle from '$lib/SlideToggle/SlideToggle.svelte';
 
 describe('SliderToggle.svelte', () => {
     afterEach(() => cleanup());
 
     it('Renders', async () => {
         render(SliderToggle);
     });
 });