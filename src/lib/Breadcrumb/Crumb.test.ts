/**
 * @vitest-environment jsdom
 */

 import { cleanup, render, screen } from '@testing-library/svelte';
 import { afterEach, describe, expect, it } from 'vitest';
 
 import Crumb from '$lib/Breadcrumb/Breadcrumb.svelte';
 import { fireEvent } from '@testing-library/dom';
 
 describe('Breadcrumb.svelte', () => {
 
     afterEach(() => cleanup());
 
     it('Renders', async () => {
         render(Crumb);
     });
     
     it('Icon shown', async () =>{})
     
 });