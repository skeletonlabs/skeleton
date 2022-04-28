
/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, it, expect } from 'vitest';
 import { fireEvent } from '@testing-library/svelte';
 // @ts-ignore
 import SliderToggle from '$lib/SlideToggle/SlideToggle.svelte';
import { bind } from 'svelte/internal';
 
 let checked;

 describe('SliderToggle.svelte', () => {
     afterEach(() => cleanup());
 
     it('Renders with props', async () => {
         const {getByTestId} = render(SliderToggle, {props: {color: 'bg-primary-200', size: 'md'}});
         expect(getByTestId('slide-toggle')).toBeTruthy(); 
     });

     it('Renders without props', async () => {
        const {getByTestId} = render(SliderToggle);
        expect(getByTestId('slide-toggle')).toBeTruthy(); 
     });  
 });