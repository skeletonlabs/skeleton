/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte'
 import { afterEach, describe, it } from 'vitest';
 
 import Card from '$lib/card/Card.svelte';
 
 describe('Card.svelte', () => {
 
     afterEach(() => cleanup())
     
     it('Renders', async () => {
         render(Card);
     })
 
 })