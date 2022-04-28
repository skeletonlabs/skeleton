/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

// @ts-ignore
import SliderToggle from '$lib/SlideToggle/SlideToggle.svelte';

describe('SliderToggle.svelte', () => {

    afterEach(() => cleanup());

    it('Renders with props', async () => {
        const {getByTestId} = render(SliderToggle, {props: {color: 'bg-primary-200', size: 'lg'}});
        expect(getByTestId('slide-toggle')).toBeTruthy(); 
    });

    it('Renders without props', async () => {
        const {getByTestId} = render(SliderToggle);
        expect(getByTestId('slide-toggle')).toBeTruthy(); 
    });  
    
});