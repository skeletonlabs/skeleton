/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

// @ts-ignore
import ListItem from '$lib/List/ListItem.svelte'
 
describe('ListItem.svelte', () => {

    afterEach(() => cleanup());

    it('Renders without props', async () => {
        const {getByTestId} = render(ListItem);
        expect(getByTestId('list-row')).toBeTruthy();
    });

    // NOTE: no props available

});