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
        expect(getByTestId('comp-button')).toBeTruthy();
    });
     
    it('Renders with custom contexts', () => {
        const { getByTestId } = render(Crumb, {variant: 'ghost-primary'});
        expect(getByTestId('comp-button').className).toContain('ring-1');
        expect(getByTestId('comp-button').className).toContain('bg-primary-500/10');
    })

});
