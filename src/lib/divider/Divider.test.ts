/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte'
 import { afterEach, describe, it } from 'vitest';
 
 import Divider from '$lib/divider/Divider.svelte'
 
 describe('Divider.svelte', () => {
 
     afterEach(() => cleanup())
     
     it('Renders', async () => {
         render(Divider);
     })
 
 })