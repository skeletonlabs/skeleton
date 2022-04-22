/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import Badge from '$lib/Badge/Badge.svelte';

describe('Badge.svelte', () => {

    afterEach(() => cleanup())

    it('Renders without props', async () => {
        const { getByTestId } = render(Badge);
        expect(getByTestId('badge')).toBeTruthy();
    });
    
    it('Renders with props', async () => {
        const { getByTestId } = render(Badge, {background: 'bg-red-500'});
        expect(getByTestId('badge')).toBeTruthy();
    });

});
 