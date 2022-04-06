/**
 * @vitest-environment jsdom
 */

import { writable } from 'svelte/store';
import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import Drawer from '$lib/Drawer/Drawer.svelte';

describe('Drawer.svelte', () => {
    
    afterEach(() => cleanup());

    it('Renders with props', async () => {
        const { getByTestId } = render(Drawer, {
            props: { fixed: true, visible: writable(false) }
        });
        expect(getByTestId('drawer')).toBeTruthy();
    });

    it('Renders without props', async () => {
        const { getByTestId } = render(Drawer);
        expect(getByTestId('drawer')).toBeTruthy();
    });
});
 