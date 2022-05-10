/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import Tooltip from '$lib/Tooltip/Tooltip.svelte';
 
describe('Tooltip.svelte', () => {
 
    afterEach(() => cleanup())
 
    it('Renders without props', async () => {
        const { getByTestId } = render(Tooltip);
        expect(getByTestId('tooltip')).toBeTruthy();
    });
     
    it('Renders with props', () => {
        const { getByTestId } = render(Tooltip, {
            props: {
                background: 'bg-green-500',
                color: 'text-red-500',
                width: 'w-[300px]',
                whitespace: 'whitespace-normal',
                rounded: 'rounded-xl',
                duration: 500,
            },
        });
        expect(getByTestId('tooltip')).toBeTruthy();
    })
     
});