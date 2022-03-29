/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import Breadcrumb from '$lib/Breadcrumb/Breadcrumb.svelte';
// import Crumb from '$lib/Breadcrumb/Crumb.svelte';

describe('Breadcrumb.svelte', () => {

    afterEach(() => cleanup())

    it('Renders without props', async () => {
        const { getByTestId } = render(Breadcrumb);
        expect(getByTestId('breadcrumb')).toBeTruthy();
    });
    
    it('Renders with props', () => {
        const { getByTestId } = render(Breadcrumb, {
            props: {display: 'outlined', color: 'primary', separator: '|'},
        });
        expect(getByTestId('breadcrumb')).toBeTruthy();
    })

    // Test Nested Components
    // https://sveltesociety.dev/recipes/testing-and-debugging/unit-testing-svelte-component/
    // NOTE: Throwing error below, so disabling this test for now. We may not need to test like this.
    /*
        stderr | unknown test
        <Crumb> was created with unknown prop 'Component'
    */
    // it('Renders nested Crumb component', () => {
    //     const { getByTestId } = render(Crumb, {
    //         props: { Component: render(Breadcrumb) }
    //     });
    //     expect(getByTestId('crumb')).toBeTruthy();
    // })
    
});