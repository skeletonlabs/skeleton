/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte'
 import { afterEach, describe, it } from 'vitest';
 
 import Avatar from '$lib/Avatar/Avatar.svelte';
 
 describe('Button.svelte', () => {
 
     afterEach(() => cleanup())
     
     it('Renders', async () => {
         render(Avatar); // , { label: 'Button' }
     })
 
 })