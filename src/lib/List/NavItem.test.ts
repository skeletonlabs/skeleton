/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import NavItem from '$lib/List/NavItem.svelte'
 
describe('NavItem.svelte', () => {

    afterEach(() => cleanup());

    it('Renders without props', async () => {
        const {getByTestId} = render(NavItem);
        expect(getByTestId('nav-item')).toBeTruthy();
    });

});