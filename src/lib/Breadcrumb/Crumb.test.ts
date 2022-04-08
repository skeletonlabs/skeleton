/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';
 
import Crumb from '$lib/Breadcrumb/Crumb.svelte';
 
describe('Breadcrumb.svelte', () => {
 
    afterEach(() => cleanup())
 
    it('Renders without props', async () => {
        const { getByTestId } = render(Crumb);
        expect(getByTestId('crumb')).toBeTruthy();
    });
     
    // it('Renders with props', async () => {
    //     const { getByTestId } = render(Crumb, {href: '/', disabled: true, active: true});
    //     expect(getByTestId('crumb')).toBeTruthy();
    // });

    // it('Renders with custom contexts', () => {
    //     const { getByTestId } = render(Crumb, {display: 'outlined', color: 'primary'});
    //     expect(getByTestId('crumb').className).toContain('ring-1');
    //     expect(getByTestId('crumb').className).toContain('bg-primary-500/10');
    // })

});
