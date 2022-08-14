/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import ThemeSwitcher from '$lib/ThemeSwitcher/ThemeSwitcher.svelte';

// FIXME: skipped, resolve error window.matchMedia is not a function
describe.skip('ThemeSwitcher.svelte', () => {
    afterEach(() => cleanup());

    it('Renders without props', async () => {
        const { getByTestId } = render(ThemeSwitcher);
        expect(getByTestId('menu-wrapper')).toBeTruthy();
    });
    
    it('Renders with props', async () => {
        const { getByTestId } = render(ThemeSwitcher, {origin: 'tr'});
        expect(getByTestId('menu-wrapper')).toBeTruthy();
    });
});
 