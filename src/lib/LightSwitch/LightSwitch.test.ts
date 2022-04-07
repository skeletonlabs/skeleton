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
        expect(getByTestId('lightswitch')).toBeTruthy();
    });
    
    it('Renders with props', async () => {
        const { getByTestId } = render(LightSwitch, {origin: 'origin-top-left', align: 'left-0'});
        expect(getByTestId('lightswitch')).toBeTruthy();
    });
});
 