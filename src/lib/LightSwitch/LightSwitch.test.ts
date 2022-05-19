/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, it, expect } from 'vitest';

import LightSwitch from '$lib/LightSwitch/LightSwitch.svelte';

describe('LightSwitch.svelte', () => {
    afterEach(() => cleanup());

    it('Renders without props', async () => {
        const { getByTestId } = render(LightSwitch);
        expect(getByTestId('menu-wrapper')).toBeTruthy();
    });
    
    it('Renders with props', async () => {
        const { getByTestId } = render(LightSwitch, {origin: 'tr'});
        expect(getByTestId('menu-wrapper')).toBeTruthy();
    });
});
 