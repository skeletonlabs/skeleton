/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte'
 import { afterEach, describe, it } from 'vitest';
 
 import GradientHeading from '$lib/GradientHeading/GradientHeading.svelte';
 
 describe('Card.svelte', () => {
 
     afterEach(() => cleanup())
     
     it('Renders', async () => {
         render(GradientHeading);
     })
 
 })