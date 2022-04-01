/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, it } from 'vitest';
 
 import ListGroup from '$lib/List/List.svelte'
 
 describe('ListGroup.svelte', () => {
 
     afterEach(() => cleanup());
 
     it('Renders', async () => {
         render(ListGroup);
     });
 
 });