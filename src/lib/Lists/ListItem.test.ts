/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, it } from 'vitest';
 
 import ListItem from '$lib/Lists/ListItem.svelte'
 
 describe('ListGroupItem.svelte', () => {
 
     afterEach(() => cleanup());
 
     it('Renders', async () => {
         render(ListItem);
     });
 });