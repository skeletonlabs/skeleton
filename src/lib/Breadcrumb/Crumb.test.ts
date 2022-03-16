/**
 * @vitest-environment jsdom
 */

 import { cleanup, render, screen } from '@testing-library/svelte';
 import { afterEach, describe, expect, it } from 'vitest';
 
 import Crumb from '$lib/Breadcrumb/Crumb.svelte';
 import { fireEvent } from '@testing-library/dom';
 
 describe('Breadcrumb.svelte', () => {
 
     afterEach(() => cleanup());
 
     it('Renders', async () => {
         render(Crumb);
     });
     
     it('Slotted Text', async () =>{
        // TODO - Figure out nested rendering
     })

     it('Inactive', async()=>{
        // TODO - Figure out nested rendering
     })
     
 });