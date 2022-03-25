/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, it } from 'vitest';
 
 import ListGroupItem from '$lib/Lists/ListGroupItem.svelte'
 
 describe('ListGroupItem.svelte', () => {
 
     afterEach(() => cleanup());
 
     it('Renders', async () => {
         render(ListGroupItem);
     });
 });