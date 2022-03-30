/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';
 
import { writable } from 'svelte/store';
import RadioItem from '$lib/RadioGroup/RadioItem.svelte';

const testStore = writable(0);
 
describe('Breadcrumb.svelte', () => {
 
    afterEach(() => cleanup())
 
    it('Renders without props', async () => {
        const { getByTestId } = render(RadioItem, {
            props: {active: testStore}
        });
        expect(getByTestId('radio-item')).toBeTruthy();
    });
     
    it('Renders with props', () => {
        const { getByTestId } = render(RadioItem, {
            props: {value: 'foobar', active: testStore},
        });
        expect(getByTestId('radio-item')).toBeTruthy();
    })
     
});