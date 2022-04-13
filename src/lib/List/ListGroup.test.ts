/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, it } from 'vitest';
 
 import List from '$lib/List/List.svelte'
 
 describe('List.svelte', () => {
 
     afterEach(() => cleanup());
 
     it('Renders', async () => {
         render(List);
     });
 
 });