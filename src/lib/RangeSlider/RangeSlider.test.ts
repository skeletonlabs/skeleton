/**
 * @vitest-environment jsdom
 */

 import { cleanup, render } from '@testing-library/svelte';
 import { afterEach, describe, it, expect } from 'vitest';
 
 import RangeSlider from '$lib/RangeSlider/RangeSlider.svelte';

 describe('RangeSlider.svelte', () => {
     let ticks = ['|', '|', '|', '|']; 
     let value;

     afterEach(() => cleanup());
 
     it('Renders with props', async () => {
         const { getByTestId } = render(RangeSlider, {
             props: { color: 'accent-primary-500', size: 'md', min: 5, max: 10, step: 1, showLabel: true, ticklist: ticks, label: 'test', value: value }
         });
         expect(getByTestId('rangeSlider')).toBeTruthy();
     });
 
     it('Renders without props', async () => {
         const { getByTestId } = render(RangeSlider);
         expect(getByTestId('rangeSlider')).toBeTruthy();
     });
 });