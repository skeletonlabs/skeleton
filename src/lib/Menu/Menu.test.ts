/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import Menu from '$lib/Menu/Menu.svelte';
 
describe('Menu.svelte', () => {
 
    afterEach(() => cleanup())
 
    it('Renders without props', async () => {
        const { getByTestId } = render(Menu);
        expect(getByTestId('menu-wrapper')).toBeTruthy();
    });
     
    it('Renders with props', () => {
        const { getByTestId } = render(Menu, {
            props: {
                select: true,
                open: false,
                origin: 'tr',
                duration: 250,
                disabled: false,
            },
        });
        expect(getByTestId('menu-wrapper')).toBeTruthy();
    })
     
});